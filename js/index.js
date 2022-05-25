var swiperIntroduction = new Swiper('.introduction-slider', {
  spaceBetween: 30,
  pagination: {
    el: '.slider-toggle',
    clickable: true,
  },
})

var swiperService = new Swiper('.service-slider', {
  spaceBetween: 30,
  pagination: {
    el: '.slider-toggle',
    clickable: true,
  },
})

var swiperFeedback = new Swiper('.slider-container', {
  spaceBetween: 30,
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.slider-toggle',
    clickable: true,
  },
})
