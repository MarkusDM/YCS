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


 const bannerSwiper = new Swiper('.banner__swiper', {
  wrapperClass: 'banner__swiper-wrapper',
  slideClass: 'banner__slide',
  speed: 500,
  slidesPerView: 1,
  freeMode: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  autoplay: {
      delay: 7000,
  },
  navigation: {
    prevEl: '.banner__prev',
    nextEl: '.banner__next',
  },

  pagination: {
    el: ".banner__fraction",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero
  },
  

});


const blogSwiper = new Swiper('.blog__swiper', {
  wrapperClass: 'blog__swiper-wrapper',
  slideClass: 'blog__slide',
  speed: 500,
  slidesPerView: 4,
  navigation: {
    prevEl: '.blog__prev',
    nextEl: '.blog__next',
  },

  pagination: {
    el: ".blog__fraction",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero
  },
  

});



const modelsSwiper = new Swiper('.models__swiper', {
  wrapperClass: 'models__swiper-wrapper',
  slideClass: 'models__slide',
  speed: 500,
  slidesPerView: 6,
  grid: {
    rows: 2,
  },
 

  pagination: {
    el: ".blog__fraction",
    type: "fraction",
   
  },
  

});



function addZero(num) {
  return (num > 9) ? num : '0' + num;
}