import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { fetchFeedbacks } from './api.js';
import Raty from 'raty-js';
import starOn from 'raty-js/src/images/star-on.png';
import starOff from 'raty-js/src/images/star-off.png';
import starHalf from 'raty-js/src/images/star-half.png';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FALLBACK_FEEDBACKS = [
  {
    author: 'Марина та Сергій',
    description:
      'Ми довго вагалися, чи готові до собаки, але коли побачили на сайті Хатинки фото Арчі, зрозуміли — це наш. Тепер ми не уявляємо ранків без його веселого гавкоту та вечорів без спільних прогулянок. Він приніс у наш дім стільки сміху та любові! Дякуємо „Хатинці лапок“ за нашого найкращого друга.',
    rate: 4.5,
  },
  {
    author: 'Олена',
    description:
      "Я завжди хотіла взяти котика, але боялася, що доросла тварина не зможе звикнути. Волонтери переконали мене дати шанс Алісі, і це було найкраще рішення! Її муркотіння — найкращий антистрес після робочого дня. Не бійтеся брати дорослих хвостиків, вони віддячать вам безмежною любов'ю!",
    rate: 5,
  },
  {
    author: 'Марина та Сергій',
    description:
      'Ми довго вагалися, чи готові до собаки, але коли побачили на сайті Хатинки фото Арчі, зрозуміли — це наш. Тепер ми не уявляємо ранків без його веселого гавкоту та вечорів без спільних прогулянок. Він приніс у наш дім стільки сміху та любові! Дякуємо „Хатинці лапок“ за нашого найкращого друга.',
    rate: 4.5,
  },
];

const refs = {
  section: document.querySelector('.happy-stories'),
  sliderEl: document.querySelector('.testimonials-slider-wrapper'),
  loaderEl: document.querySelector('.testimonials-loader'),
  listEl: document.querySelector('.testimonials-list'),
  paginationEl: document.querySelector('.testimonials-pagination'),
  prevBtn: document.querySelector('.prev-btn'),
  nextBtn: document.querySelector('.next-btn'),
};

let testimonialsSwiper = null;

if (refs.section && refs.sliderEl && refs.listEl) {
  initTestimonials();
}

async function initTestimonials() {
  setLoadingState(true);

  try {
    const feedbacks = await fetchFeedbacks({ page: 1, limit: 12 });
    const slidesData = normalizeSlides(feedbacks);

    renderFeedbackSlides(slidesData);
    initRatyStars();
    setupSwiper();
  } catch {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити відгуки. Показано резервні дані.',
      position: 'topRight',
    });

    renderFeedbackSlides(normalizeSlides(FALLBACK_FEEDBACKS));
    initRatyStars();
    setupSwiper();
  } finally {
    setLoadingState(false);
  }
}

function setupSwiper() {
  if (testimonialsSwiper) {
    testimonialsSwiper.destroy(true, true);
  }

  testimonialsSwiper = new Swiper(refs.sliderEl, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 450,
    watchOverflow: true,
    pagination: {
      el: refs.paginationEl,
      clickable: true,
    },
    navigation: {
      prevEl: refs.prevBtn,
      nextEl: refs.nextBtn,
      disabledClass: 'is-disabled',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 64,
      },
    },
  });
}

function createFeedbackCardMarkup({ author, description, rate }) {
  return `
		<li class="testimonial-card swiper-slide">
			<div class="testimonial-rating" data-rate="${Number(rate) || 0}"></div>
      <p class="testimonial-text">${escapeHtml(description ?? '')}</p>
			<div class="testimonial-author-wrapper">
        <h3 class="testimonial-author">${escapeHtml(author ?? 'Анонім')}</h3>
			</div>
		</li>
	`;
}

function renderFeedbackSlides(feedbacks) {
  refs.listEl.innerHTML = feedbacks.map(createFeedbackCardMarkup).join('');
}

function ensureMinimumFeedbacks(feedbacks, minCount) {
  const source =
    Array.isArray(feedbacks) && feedbacks.length > 0
      ? feedbacks
      : FALLBACK_FEEDBACKS;
  const normalized = [...source];

  while (normalized.length < minCount) {
    normalized.push(source[normalized.length % source.length]);
  }

  return normalized;
}

function normalizeSlides(feedbacks) {
  const normalized = ensureMinimumFeedbacks(feedbacks, 3);
  if (normalized.length % 2 !== 0) {
    normalized.push(normalized[0]);
  }
  return normalized;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function initRatyStars() {
  const ratingElements = refs.listEl.querySelectorAll('.testimonial-rating');
  ratingElements.forEach(el => {
    const score = Number(el.dataset.rate) || 0;
    new Raty(el, {
      score,
      number: 5,
      half: true,
      halfShow: true,
      space: false,
      readOnly: true,
      starOn,
      starOff,
      starHalf,
      path: '',
      targetKeep: true,
      hints: ['', '', '', '', ''],
    }).init();
  });
}

function setLoadingState(isLoading) {
  if (!refs.loaderEl) {
    return;
  }

  refs.loaderEl.classList.toggle('is-hidden', !isLoading);
  refs.listEl.style.display = isLoading ? 'none' : '';

  const navContainer = refs.section?.querySelector(
    '.testimonials-nav-container'
  );
  if (navContainer) {
    navContainer.style.visibility = isLoading ? 'hidden' : 'visible';
  }
}
