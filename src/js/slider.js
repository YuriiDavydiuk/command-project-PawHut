import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Raty from 'raty-js';
import starOn from 'raty-js/src/images/star-on.png';
import starOff from 'raty-js/src/images/star-off.png';
import starHalf from 'raty-js/src/images/star-half.png';

import { Navigation, Pagination } from 'swiper/modules';
import { fetchFeedbacks } from './api.js';

const feedbackRefs = {
  section: document.querySelector('.happy-stories'),
  sliderEl: document.querySelector('.testimonials-slider-wrapper'),
  loaderEl: document.querySelector('.testimonials-loader'),
  listEl: document.querySelector('.testimonials-list'),
  paginationEl: document.querySelector('.testimonials-pagination'),
  prevBtn: document.querySelector('.prev-btn'),
  nextBtn: document.querySelector('.next-btn'),
};

const INITIAL_PAGE = 1;
const FEEDBACK_LIMIT = 12;

const SWIPER_CONFIG = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  speed: 450,
  watchOverflow: true,
  pagination: {
    el: feedbackRefs.paginationEl,
    clickable: true,
  },
  navigation: {
    prevEl: feedbackRefs.prevBtn,
    nextEl: feedbackRefs.nextBtn,
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
};

let testimonialsSwiper = null;

if (hasRequiredRefs()) {
  initTestimonials();
}

function hasRequiredRefs() {
  return Object.values(feedbackRefs).every(Boolean);
}

async function initTestimonials() {
  setLoadingState(true);

  try {
    const feedbacks = await fetchFeedbacks({
      page: INITIAL_PAGE,
      limit: FEEDBACK_LIMIT,
    });
    const slidesData = normalizeSlides(feedbacks);

    renderFeedbackSlides(slidesData);
    initRatyStars();
    setupSwiper();
  } catch {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити відгуки.',
      position: 'topRight',
    });
  } finally {
    setLoadingState(false);
  }
}

function setupSwiper() {
  if (testimonialsSwiper) {
    testimonialsSwiper.destroy(true, true);
  }

  testimonialsSwiper = new Swiper(feedbackRefs.sliderEl, SWIPER_CONFIG);
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
  feedbackRefs.listEl.innerHTML = feedbacks
    .map(createFeedbackCardMarkup)
    .join('');
}

function normalizeSlides(feedbacks) {
  if (!Array.isArray(feedbacks) || feedbacks.length === 0) return [];

  const normalized = [...feedbacks];
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
  const ratingElements = feedbackRefs.listEl.querySelectorAll(
    '.testimonial-rating'
  );
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
  if (!feedbackRefs.loaderEl) {
    return;
  }

  feedbackRefs.loaderEl.classList.toggle('is-hidden', !isLoading);
  feedbackRefs.listEl.style.display = isLoading ? 'none' : '';

  const navContainer = feedbackRefs.section?.querySelector(
    '.testimonials-nav-container'
  );
  if (navContainer) {
    navContainer.style.visibility = isLoading ? 'hidden' : 'visible';
  }
}
