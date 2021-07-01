$(document).ready(function () {

    //scroll suave a los menus
    $('a.scroll-promociones').on('click', function (e) {
        e.preventDefault
        var seccionOffserTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({scrollTop: seccionOffserTop}, 1000);
    })

    $('a.scroll-suave').on('click', function (e) {
        e.preventDefault
        var seccionOffserTop = $($(this).attr('href')).offset().top - 60
        $('html, body').stop().animate({scrollTop: seccionOffserTop}, 1000);
    })

    $('a.scroll-arma-pedido').on('click', function (e) {
        e.preventDefault
        var seccionOffserTop = $($(this).attr('href')).offset().top
        $('html, body').stop().animate({scrollTop: seccionOffserTop}, 1000);
    })


    var Header = $('.header');

    $(window).on('scroll', function () {
        var proyectosOffsetTop = $('#promociones').offset().top;

        if ($(window).scrollTop() >= proyectosOffsetTop) {

            Header.css('display', 'none');

        }else if ($(window).scrollTop() <= proyectosOffsetTop) {

            Header.css('display', 'flex');

        }
    })

  });