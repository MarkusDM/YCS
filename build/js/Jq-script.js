$(document).ready(function () {

   

    $(".entry__btn").hover(function() {
        $(".pagination").addClass("active-pag");
    }, function() {
      $(".pagination").removeClass("active-pag");
    });

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
    
    
    

     $(".catalog__filter-btn > span").on('click', function() { 
        $('.catalog-filter').toggleClass('active');

     });
    
    
    //  $('.catalog-filter__btn-cancellation').click(function(){
    //     $('.catalog-filter').removeClass('active');
    //  });



     $(".catalog__filter-btn > svg").on('click', function() {
        $(".catalog-filter").addClass("active");
        $(".header").addClass("header--two");
        $(".catalog__wrapper").css("display", 'none');
        $(".main").css("display", 'none');
        $(".catalog__title").css("display", 'none');
        $(".catalog__btn-all").css("display", 'none');
    });


    $(".catalog-filter__content-title-close").on('click', function() {
        $(".catalog-filter").removeClass("active");
        $(".header").removeClass("header--two");
        $(".catalog__wrapper").css("display", 'flex');
        $(".main").css("display", 'block');
        $(".catalog__title").css("display", 'flex');
        $(".catalog__btn-all").css("display", 'block');
    });





   



   


    //  $('.record__checkbox > input[name=checkbox]').each(function () {
    //     $(this).parents('.record-form__block').toggleClass('active').next().slideToggle();
    //     $('.record__custom-checkbox').not(this).parent('.record-form__block').removeClass('active').next().slideUp();
    //  });


});




$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count > 9 ? count : '0' + count);
        $input.change();
        
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
        count = count < 0 ? 0 : count;
        $input.val(count > 9 ? count : '0' + count);
        $input.change();
        
        return false ;
        
    });
});






$('.record__checkbox > input[name=checkbox]').change(function () {
    $(this).parents('.record-form').toggleClass('active');
    $('.record__checkbox > input[name=checkbox]').not(this).parent('.record-form').removeClass('active');
  });


  $('.record__checkbox > input[name=checkbox]').change(function () {
    $(this).parents('.record__photo-article').toggleClass('active');
    $('.record__checkbox > input[name=checkbox]').not(this).parent('.record__photo-article').removeClass('active');
  });




  $('.types-model__nav-text').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.types-model__js[data-tab="'+ id +'"]');
    
    $('.types-model__nav-text.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.types-model__js.active').removeClass('active'); // 3
    content.addClass('active'); // 4
 });