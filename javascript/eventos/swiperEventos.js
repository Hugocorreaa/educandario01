var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    thumbs: {
      swiper: swiper,
    },
  });