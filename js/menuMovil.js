$(document).ready(function () {

    var numero = 1;

    $('.svg-menu').on('click', function (e) {

        e.preventDefault();
        if (numero == 1) {
            $('.menu-movil').animate({left:0}, 300);
            numero = 0;
        }else {
            $('.menu-movil').animate({left:'-100%'}, 300);
            numero = 1;
        }
    });

    $('.menu-movil a').on('click', function (e) {
        
        $('.menu-movil').animate({left:'-100%'}, 300);
        numero = 1;
    })
})