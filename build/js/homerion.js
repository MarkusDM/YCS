$(document).ready(function () {

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
    $('.orders__filter').length ? $('.orders__filter').css('display', 'flex').hide() : false;
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

});