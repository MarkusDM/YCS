"use strict";


const mainSwiper = new Swiper('.main__swiper', {
  wrapperClass: 'main__swiper-wrapper',
  slideClass: 'main__slide',
  speed: 500,
  slidesPerView: 1,
  watchSlidesProgress: true,
  loop: true,
  freeMode: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 7000,
  },
  

});


const mainSwiperTwo = new Swiper('.main__swiper-two', {
    wrapperClass: 'main__swiper-wrapper-two',
    slideClass: 'main__slide-two',
    speed: 500,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    autoplay: {
        delay: 7000,
    },


    thumbs: {
        swiper: mainSwiper
      }
    
  
 });


 mainSwiper.params.control = mainSwiperTwo;
 mainSwiperTwo.params.control = mainSwiper;



 const swiperNav = new Swiper('.shooting__nav', {
    wrapperClass: 'shooting__nav-wrapper',
    slideClass: 'shooting__nav-slide ',  
    slidesPerView: 7,
    direction: 'vertical',
    watchSlidesProgress: true,
    freeMode: true,

    pagination: {
        
        clickable: true,
       
      }
  
 });

 const swiperShooting = new Swiper('.shooting__swiper', {
    wrapperClass: 'shooting__swiper-wrapper',
    slideClass: 'shooting__slide ',  
    slidesPerView: 1,
    
    
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },


    thumbs: {
        swiper: swiperNav
      }
    
  
 });