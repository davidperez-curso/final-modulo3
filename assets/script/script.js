$(document).ready(function () {
    //DATA
    $('.get-data').click(function (e) { 
        e.preventDefault();
        var dato = $('.input-data').val();
        $('.agregar-data').data("datos",dato);
        alert('se ha guardado el siguiente dato ' + "'" + dato + "'");  
    });
    $('.add-data').click(function (e) { 
        e.preventDefault();
        dato = $('.agregar-data').data("datos");
        $('.agregar-data').html(dato); 
    });

    // ADCLASS
    $('.addrojo').click(function () { 
        $('.rojo').addClass('text-danger');
    });

    $('.addblue').click(function () { 
        $('.azul').addClass('bg-primary');
        $('.blanco').addClass('text-white');
    });

    $('.addyellow').click(function () { 
        $('.agrandar').addClass('h5');
        $('.agrandar').addClass('text-warning');
        $('.amarillo').addClass('border-warning'); 
    });

    //TOGGLE
    $('.toggle').click(function () { 
        $('.atardecer').slideToggle("slow");
    });

    //APPEND
    $('.boton-append').click(function () { 
        $('.cont-texto').append(($('.append-texto').val())+" ");
    });

    //VAL
    $('.boton-val').click(function (e) { 
        e.preventDefault();
        var nombre = $('#texto1').val();
        var apellido = $('#texto2').val();
        var ciudad = $('#texto3').val();
        $('.val-texto').html("Tu nombre es " + nombre + " " + apellido + " " + "y vives en "+ ciudad + ". " + "Estos datos fueron obtenidos mediante la función .val()" );
    });

    //FADEIN FADEOUT
    $('.in').click(function (e) { 
        e.preventDefault();
        $('.earth').fadeIn(900,'swing');
    });
    $('.out').click(function (e) { 
        e.preventDefault();
        $('.earth').fadeOut(900,'swing');
    });

    //FOCUS 
    $('.boton-focus').click(function (e) { 
        e.preventDefault();
        $('.focus-input').focus(function () { 
             $(this).addClass('bg-warning');
             $(this).mouseleave(function () { 
                 $(this).removeClass('bg-warning');
             });
            
         });
        
     });

     //HIDE - SHOW
    $('.btn-hide').click(function (e) { 
        e.preventDefault();
        $('.parrafo-hide').hide('slow','linear');
    });

    $('.btn-show').click(function (e) { 
        e.preventDefault();
        $('.parrafo-hide').show('slow','linear');
    });

    //SLIDEUP - SLIDEDOWN
    $('.btn-sup').click(function () { 
        $('.parrafo-slide').slideUp();
           
    });
    $('.btn-sdown').click(function () { 
        $('.parrafo-slide').slideDown();  
    });


    

});