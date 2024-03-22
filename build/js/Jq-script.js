$(document).ready(function () {
    // $('.header__item').hover(function() {
    //     $(this).toggleClass('active');
    //     var isHovered = $(this).is(":hover");
    //     if (isHovered) {
    //       $(this).children('.header__down').stop().slideDown(300);
    //     } else {
    //       $(this).children('.header__down').stop().slideUp(300);
    //     }
    // });

    $(".header__item").hover(
        function () {
            clearTimeout($.data(this, "timer"));

            $(".header__down", this).stop(true, true).slideDown(400);
        },
        function () {
            $.data(
                this,
                "timer",
                setTimeout(
                    $.proxy(function () {
                        $(".header__down", this).stop(true, true).slideUp(400);
                    }, this),
                    100
                )
            );
        }
    );

    $(".entry__btn").hover(
        function () {
            $(".pagination").addClass("active-pag");
        },
        function () {
            $(".pagination").removeClass("active-pag");
        }
    );

    $(".header__bottom-mob-burger").on("click", function () {
        $(".header__nav-mob").toggleClass("open-nav");
        $(".header").toggleClass("header--active");
        // $("main").toggleClass("main-none")
    });

    $(".header__bottom-mob-burger").on("click", function () {
        $(".header__bottom-mob-burger").toggleClass("open");
        // $("main").toggleClass("main-none")
    });

    $(".select").on("click", ".select-head", function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).next().fadeOut();
        } else {
            $(".select-head").removeClass("open");
            $(".select-list").fadeOut();
            $(this).addClass("open");
            $(this).next().fadeIn();
        }
    });

    $(".select").on("click", ".select-item", function () {
        $(".select-head").removeClass("open");
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {
            $(".select-head").removeClass("open");
            $(".select-list").fadeOut();
        }
    });

    $(".catalog-filter__item").click(function () {
        var id = $(this).attr("data-tab"),
            content = $('.catalog-filter__content[data-tab="' + id + '"]');

        $(".catalog-filter__item.active").removeClass("active"); // 1
        $(this).addClass("active"); // 2

        $(".catalog-filter__content.active").removeClass("active"); // 3
        content.addClass("active"); // 4
    });

    $(".catalog__filter-btn > span").on("click", function () {
        $(".catalog-filter").toggleClass("active");
    });

    //  $('.catalog-filter__btn-cancellation').click(function(){
    //     $('.catalog-filter').removeClass('active');
    //  });

    $(".catalog__filter-btn > svg").on("click", function () {
        $(".catalog-filter").addClass("active");
        $(".header").addClass("header--two");
        $(".catalog__wrapper").css("display", "none");
        $(".main").css("display", "none");
        $(".catalog__title").css("display", "none");
        $(".catalog__btn-all").css("display", "none");
    });

    $(".catalog-filter__content-title-close").on("click", function () {
        $(".catalog-filter").removeClass("active");
        $(".header").removeClass("header--two");
        $(".catalog__wrapper").css("display", "flex");
        $(".main").css("display", "block");
        $(".catalog__title").css("display", "flex");
        $(".catalog__btn-all").css("display", "block");
    });

    //  $('.record__checkbox > input[name=checkbox]').each(function () {
    //     $(this).parents('.record-form__block').toggleClass('active').next().slideToggle();
    //     $('.record__custom-checkbox').not(this).parent('.record-form__block').removeClass('active').next().slideUp();
    //  });
});

$(document).ready(function () {
    $(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count > 9 ? count : "0" + count);
        $input.change();

        return false;
    });
    $(".plus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) + 1;
        count = count < 0 ? 0 : count;
        $input.val(count > 9 ? count : "0" + count);
        $input.change();

        return false;
    });

    $(".record__checkbox > input[name=checkbox]").change(function () {
        $(this).parents(".record-form").toggleClass("active");
        $(".record__checkbox > input[name=checkbox]").not(this).parent(".record-form").removeClass("active");
    });

    $(".record__checkbox > input[name=checkbox]").change(function () {
        $(this).parents(".record__photo-article").toggleClass("active");
        $(".record__checkbox > input[name=checkbox]").not(this).parent(".record__photo-article").removeClass("active");
    });

    $(".types-model__nav-text").click(function () {
        var id = $(this).attr("data-tab"),
            content = $('.types-model__js[data-tab="' + id + '"]');

        $(".types-model__nav-text.active").removeClass("active"); // 1
        $(this).addClass("active"); // 2

        $(".types-model__js.active").removeClass("active"); // 3
        content.addClass("active"); // 4
    });

    $(".restore-modal__close").click(function () {
        $(".restore-modal").removeClass("active"); // 3
    });

    $(".restore-open").click(function () {
        $(".restore-modal").addClass("active"); // 3
    });

    $(".record__photo-input-file input[type=file]").on("change", function () {
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    $(".add-modal-open").click(function () {
        $(".add-popup").addClass("active");
    });

    $(".add-popup__close").click(function () {
        $(".add-popup").removeClass("active");
    });

    $(".cancellation-modal-open").click(function () {
        $(".cancellation-modal").addClass("active");
    });

    $(".cancellation-modal__close").click(function () {
        $(".cancellation-modal").removeClass("active");
    });

    $(".tt-modal-open").click(function () {
        $(".tt-modal").addClass("active");
    });

    $(".tt-modal__close").click(function () {
        $(".tt-modal").removeClass("active");
    });
});

const players = Array.from(document.querySelectorAll(".web-video")).map((p) => new Plyr(p));

const player = new Plyr(".web-video", {
    volume: 1,
});

//этот код в script.js
$(document).ready(function () {
    $(":input").inputmask();
    $(".phone").inputmask({
        mask: "+7(999) 999-99-99",
        clearIncomplete: true, //проверка на заполненность
    });
    $(".email").inputmask({
        mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
        greedy: false,
        clearIncomplete: true,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            "*": {
                validator: "[0-9A-Za-z-а-я-_]",
                casing: "lower",
            },
        },
    });
});

$(document).on("change", ".record__custom-checkbox-pers > input[type=checkbox]", function () {
    var $this = $(this),
        $chks = $(document.getElementsByName(this.name)),
        $all = $chks.filter(".chk-all");

    if ($this.hasClass("chk-all")) {
        $chks.prop("checked", $this.prop("checked"));
    } else
        switch ($chks.filter(":checked").length) {
            case +$all.prop("checked"):
                $all.prop("checked", false).prop("indeterminate", false);
                break;
            case $chks.length - !!$this.prop("checked"):
                $all.prop("checked", true).prop("indeterminate", false);
                break;
            default:
                $all.prop("indeterminate", true);
        }
});

//правки от 20.03.24

function remToPx(remValue) {
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var pxValue = remValue * htmlFontSize;
    return Math.round(pxValue);
}

//добавление в избранное - незарегистрированный пользователь

//1 плашка для всех
// $(function () {
//     $(".model__like").on("click", function (e) {
//         e.preventDefault();
//         $(this).toggleClass("active");
//         let modelElement = $(this).closest(".model");
//         let favBlockPositionTop, favBlockPositionLeft;
//         if ($(window).width() > 769) {
//             favBlockPositionTop = modelElement.position().top + modelElement.outerHeight() - remToPx(8);
//             favBlockPositionLeft = modelElement.position().left + modelElement.outerHeight() - remToPx(11);
//         } else {
//             favBlockPositionTop = modelElement.position().top + modelElement.outerHeight() - remToPx(22);
//             favBlockPositionLeft = modelElement.position().left + modelElement.outerHeight() - remToPx(27);
//         }
//         if ($(this).hasClass("active")) {
//             $(".models__fav-block").css({
//                 display: "block",
//                 top: favBlockPositionTop,
//                 left: favBlockPositionLeft,
//             });
//         } else {
//             $(".models__fav-block").css("display", "none");
//         }
//     });
// });

//плашка на каждой карточке 
$(function () {
    $(".model__like").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        
        if ($(this).hasClass("active")) {
            let cardWrapper = $(this).closest(".model-wrapper");
            let favBlock = cardWrapper.find('.model__fav-block');
            
            $('.model__fav-block').not(favBlock).fadeOut(200);
            favBlock.fadeToggle(200);
        } else {
            let cardWrapper = $(this).closest(".model-wrapper");
            let favBlock = cardWrapper.find('.model__fav-block');
            favBlock.fadeOut(200);
        }
    });
});

//уведомления о съемках
$(function () {
    $(".model__notif").on("click", function () {
        let cardWrapper = $(this).closest(".model-wrapper");
        let notifBlock = cardWrapper.find('.model__notif-details');
        let favIco = cardWrapper.find('.model__like');

        $(this).fadeOut(200)
        favIco.fadeOut(200)
        notifBlock.fadeIn(200)

        
    })
});

$(function () {
    $('.model__notif-details_close').on('click', function (){
        let cardWrapper = $(this).closest(".model-wrapper");
        let favIco = cardWrapper.find('.model__like');
        let notifIco = cardWrapper.find('.model__notif');
        let notifBlock = $(this).closest('.model__notif-details')

        if(notifBlock.find('.record__custom-checkbox:checked').length){
            notifIco.addClass('active')
        } else{
            notifIco.removeClass('active')
        }

        notifBlock.fadeOut(200)
        favIco.fadeIn(200)
        notifIco.fadeIn(200)
    })
})

//удаление модели из избранных
$('.personal__tab-models-wrapper .model__like').on('click', function () {
    if($(this).hasClass('active')){
        let modelCard = $(this).closest('.model-wrapper')
        modelCard.remove()
    }
})