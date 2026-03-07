import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.gallery-swiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});