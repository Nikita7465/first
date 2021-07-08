$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.burger,.promo__nav').toggleClass('active')
    });
    $('.promo__btn').on('click', function () {
        $('.overlay, .popup__thanks').fadeIn('slow');
        $('.popup__registration').fadeOut(1)
    })
    $('.popup__close').on('click', function () {
        $('.overlay, .popup__thanks').fadeOut('slow')
    })
    $('.login__btn').on('click', function () {
        $('.overlay,.popup__registration').fadeIn('slow')
        $('.popup__thanks').fadeOut(1)
    })
    $('.popup__close').on('click', function () {
        $('.overlay, .popup__registration').fadeOut('slow')
    })
    //функция для scroll-top
    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 1000) {
            $('.go-top').fadeIn('slow')
        } else {
            $('.go-top').fadeOut('slow')
        }
    });
});