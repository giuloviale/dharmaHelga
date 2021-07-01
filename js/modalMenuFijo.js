$(document).ready(function() {

    //Evento sobre el boton agregar
    $('#tamaño').on('click', function () {
    
    $('#modal-menu-fijo').css('display', 'flex');        
    
        //Evento sobre el boton cerrar que cierra el div con el ID modal
        $('#btnCerrar').on('click', function () {
            $('#modal-menu-fijo').css('display', 'none');
        })
    })
    
        //Remover el modal con la tecla Esc
        $(document).on('keyup', function (e) {
            //Which para saber que tecla fue presionada
            if (e.which==27) {
                $('#modal-menu-fijo').css('display', 'none');
            }
        })

        //Evento sobre el boton a1gregar
        $('#salsa-pasta').on('click', function () {
    
            $('#modal-menu-fijo-pastas').css('display', 'flex');        
            
                //Evento sobre el boton cerrar que cierra el div con el ID modal
                $('#btnCerrarPasta').on('click', function () {
                    $('#modal-menu-fijo-pastas').css('display', 'none');
                })
            })
        $('#salsa-pasta2').on('click', function () {

            $('#modal-menu-fijo-pastas').css('display', 'flex');        
            
                //Evento sobre el boton cerrar que cierra el div con el ID modal
                $('#btnCerrarPasta').on('click', function () {
                    $('#modal-menu-fijo-pastas').css('display', 'none');
                })
            })
        $('#salsa-pasta3').on('click', function () {

            $('#modal-menu-fijo-pastas').css('display', 'flex');        
            
                //Evento sobre el boton cerrar que cierra el div con el ID modal
                $('#btnCerrarPasta').on('click', function () {
                    $('#modal-menu-fijo-pastas').css('display', 'none');
                })
            })
        $('#salsa-pasta4').on('click', function () {

            $('#modal-menu-fijo-pastas').css('display', 'flex');        
            
                //Evento sobre el boton cerrar que cierra el div con el ID modal
                $('#btnCerrarPasta').on('click', function () {
                    $('#modal-menu-fijo-pastas').css('display', 'none');
                })
            })
            //Remover el modal con la tecla Esc
            $(document).on('keyup', function (e) {
                //Which para saber que tecla fue presionada
                if (e.which==27) {
                    $('#modal-menu-fijo-pastas').css('display', 'none');
                }
            })
});