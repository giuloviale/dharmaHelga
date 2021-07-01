$(document).ready(function() {

    //Evento sobre el boton agregar
    $('#tamaño').on('click', function () {
    
    $('#modal').css('display', 'flex');
    
        //Evento sobre el boton cerrar que cierra el div con el ID modal
        $('#btnCerrar').on('click', function () {
            $('#modal').css('display', 'none');
        })
    })
    
        //Remover el modal con la tecla Esc
        $(document).on('keyup', function (e) {
            //Which para saber que tecla fue presionada
            if (e.which==27) {
                $('#modal').css('display', 'none');
            }
        })
    });