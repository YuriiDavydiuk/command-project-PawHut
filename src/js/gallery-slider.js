import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryRefs = {
  swiperEl: document.querySelector('.gallery-swiper'),
  prevBtn: document.querySelector('.gallery-buttons .swiper-button-prev'),
  nextBtn: document.querySelector('.gallery-buttons .swiper-button-next'),
  paginationEl: document.querySelector('.swiper-pagination'),
};

let gallerySwiper = null;

if (galleryRefs.swiperEl) {
  initGallerySwiper();
}

function initGallerySwiper() {
  gallerySwiper = new Swiper(galleryRefs.swiperEl, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    loop: false,
    navigation: {
      prevEl: galleryRefs.prevBtn,
      nextEl: galleryRefs.nextBtn,
      disabledClass: 'swiper-button-disabled',
    },
    pagination: {
      el: galleryRefs.paginationEl,
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    on: {
      init: function () {
        updateButtonStates(this);
      },
      slideChange: function () {
        updateButtonStates(this);
      },
    },
  });
}

function updateButtonStates(swiper) {
  if (galleryRefs.prevBtn) {
    if (swiper.isBeginning) {
      galleryRefs.prevBtn.classList.add('swiper-button-disabled');
    } else {
      galleryRefs.prevBtn.classList.remove('swiper-button-disabled');
    }
  }

  if (galleryRefs.nextBtn) {
    if (swiper.isEnd) {
      galleryRefs.nextBtn.classList.add('swiper-button-disabled');
    } else {
      galleryRefs.nextBtn.classList.remove('swiper-button-disabled');
    }
  }
}
