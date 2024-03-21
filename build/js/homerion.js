"use strict";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

$(document).ready(function () {

    const rem = function (rem) {
        if ($(window).width() > 768) {
            return 0.005208335 * $(window).width() * rem;
        } else {
            return (100/390) * (0.1 * $(window).width()) * rem;
        }
    }

    const priceTwoSlider = new Swiper('.price-two__slider', {
        speed: 500,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.price-two__pagination',
            type: 'bullets',
        },

        on: {
            afterInit: function (e) {
                if ($(window).width() > 768) {
                    e.destroy();
                }
            },
        }
    });

    const teamSlider = new Swiper('.team__slider', {
        speed: 500,
        slidesPerView: 2,
        spaceBetween: rem(2),

        grid: {
            rows: 2,
            fill: 'row',
        },

        pagination: {
            el: '.team__pagination',
            type: 'bullets',
        },

        on: {
            afterInit: function (e) {
                if ($(window).width() > 768) {
                    e.destroy();
                }
            },
        }
    });

    const shotTypeSlider = new Swiper('.shot-type__slider', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: rem(4),

        pagination: {
            el: '.shot-type__pagination',
            type: 'bullets',
        },

        on: {
            afterInit: function (e) {
                if ($(window).width() > 768) {
                    e.destroy();
                }
            },
        }
    });

    const loginSlider = new Swiper('.modal-login__content', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: rem(25),
        autoHeight: true,
        allowTouchMove: false,

        navigation: {
            nextEl: '.modal-login__register-btn',
            prevEl: '.modal-login__login-btn',
        },
    });

    $('.modal-example').each(function () {
        let thumb = new Swiper($(this).find('.modal-example__thumb-slider')[0], {
            speed: 500,
            slidesPerView: 4,
            spaceBetween: rem(2),
            breakpoints: {

                748: {
                 
                  slidesPerView: 5,
                 
            
            
                },
            }
            
        });

        new Swiper($(this).find('.modal-example__slider')[0], {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: rem(2.8),

            pagination: {
                el: $(this).find('.modal-example__fraction')[0],
                type: 'bullets',
                clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
                
            },

            navigation: {
                prevEl: $(this).find('.modal-example__prev')[0],
                nextEl: $(this).find('.modal-example__next')[0],
            },

            breakpoints: {

                748: {
                 
                  slidesPerView: 2,

                  pagination: {
                    el: $(this).find('.modal-example__fraction')[0],
                    type: 'fraction',
                    formatFractionCurrent: addZero,
                    formatFractionTotal: addZero
                },
                
                },
            },

            thumbs: {
                swiper: thumb,
            }
        });
    });

    // Input mask
    $('.input-date').mask('99.99.9999');

    // Personal
    $('.personal__back-link').click(function () {
        $('.personal__container').removeClass('active');
    });
    $('.personal__tab:not(a)').click(function () {
        $('.personal__tab').removeClass('active');
        $(this).addClass('active');
        $('.personal__container').addClass('active');
    });
    $('.personal__tab-content > input').change(function () {
        let fadeSpeed = $(window).width() > 768 ? 200 : 0;

        $('.personal__tab-content').hide().removeClass('active');
        $(this).parent().fadeIn(fadeSpeed).addClass('active');
    });

    // Orders input date
    $('.orders__filter-label input[type="date"]').change(function () {
        let date = $(this).val().slice(8,10) + '.' + $(this).val().slice(5,7) + '.' + $(this).val().slice(0,4);
        $(this).siblings('.input-date').val(date);
    });
    $('.orders__input.input-date').change(function () {
        let date = $(this).val().slice(6,10) + '-' + $(this).val().slice(3,5) + '-' + $(this).val().slice(0,2);
        $(this).siblings('input[type="date"]').val(date)
    });

    // Orders filter
    $('.orders__filter-btn').hasClass('active') ? $('.orders__filter').css('display', 'flex') : $('.orders__filter').hide();
    $('.orders__filter-btn').click(function () {
        $(this).toggleClass('active');
        $('.orders__filter').slideToggle();
    });

    // Orders item
    $('.orders__price-btn').click(function () {
        $(this).toggleClass('active')
            .parents('.orders__item').find('.orders__item-content').toggleClass('active')
            .find('.orders__price-box').slideToggle();
    });

    // Portfolio filter
    $('.portfolio__filter-label input').change(function () {
        $(this).parents('.portfolio__filter-item').find('.portfolio__filter-label').removeClass('active');
        $(this).parent().addClass('active').siblings('.portfolio__filter-label').find('input').prop('checked', false);
        if ($(this).prop('checked')) {
            $(this).parents('.portfolio__filter-item').next().addClass('active');
            if ($(window).width() <= 768) {
                $(this).parents('.portfolio__filter-item').next().slideDown();
            }
        } else {
            $(this).parent().removeClass('active').parents('.portfolio__filter-item').nextAll().removeClass('active')
                .find('.portfolio__filter-label').removeClass('active').find('input').prop('checked', false).parent();
            if ($(window).width() <= 768) {
                $(this).parents('.portfolio__filter-item').nextAll().slideUp();
            }

        }
    });
    $('.portfolio__filter-hide').click(function () {
        $(this).toggleClass('active').parent().siblings('.portfolio__filter-item').toggleClass('hide').find('.portfolio__filter-item-wrap').slideToggle();
    });

    // Modal-login checkbox
    $('.modal-login__checkbox-label > input').change(function () {
        $(this).parent().toggleClass('active');
    });

    // Modal
    $.fancybox.defaults.smallBtn = false;
    $.fancybox.defaults.arrows = false;
    $.fancybox.defaults.infobar = false;
    $.fancybox.defaults.touch = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.baseTpl =
        '<div class="fancybox-container" role="dialog" tabindex=" -1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-stage modal__stage"></div>' +
        '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>';

    $('.example-open').click(function () {
        let src = $(this).find('.modal-example')[0];

        $.fancybox.open({
            src  : src,
            type : 'inline',
            opts : {}
        });
    });

    $('.feedback-open').click(function () {
        $.fancybox.open({
            src  : '.modal-feedback',
            type : 'inline',
            opts : {}
        });
    });
    /*$('.feedback__submit').click(function () {
        $.fancybox.close();
    });*/

    /*$('.feedback-complete').click(function () {
        $.fancybox.open({
            src  : '.modal-fb-complete',
            type : 'inline',
            opts : {},
        });
    });*/

    $('.order-complete').click(function () {
        $.fancybox.open({
            src  : '.modal-order',
            type : 'inline',
            opts : {},
        });
    });

    $('.login-open').click(function () {
        $.fancybox.open({
            src  : '.modal-login',
            type : 'inline',
            opts : {
                beforeClose: function () {
                    loginSlider.slideTo(0);
                },
            },
        });
    });

    /*$('.reg-complete').click(function () {
        $.fancybox.close();

        $.fancybox.open({
            src  : '.modal-reg-complete',
            type : 'inline',
            opts : {},
        });
    });*/

});