$(document).ready(function () {

    $('.pedir').on('click', function (e) {

        e.preventDefault();
        $('.modal-pedido').css('display', 'grid');

    })

    $('#minimizar').on('click', function (e) {

        e.preventDefault();
        $('.modal-pedido').css("display", "none");
    })
})