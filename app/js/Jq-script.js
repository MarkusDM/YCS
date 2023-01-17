$(document).ready(function () {



    $(".header__burger").on('click', function() {
        $(".header__nav").toggleClass("open-nav");
        // $("main").toggleClass("main-none")
    });
    
    $(".header__burger").on('click', function() {
        $(".header__burger").toggleClass("open");
        // $("main").toggleClass("main-none")
    });
    
    
    
    
    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
        }
    });
    
    
    
    
    $('.catalog-filter__item').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.catalog-filter__content[data-tab="'+ id +'"]');
        
        $('.catalog-filter__item.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.catalog-filter__content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
     });
    
    
     $('.catalog__filter-btn').click(function(){
        $('.catalog-filter').addClass('active');
     });
    
    
     $('.catalog-filter__btn-cancellation').click(function(){
        $('.catalog-filter').removeClass('active');
     });


});




