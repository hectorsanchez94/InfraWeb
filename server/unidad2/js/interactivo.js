/**
 * Created by Hector on 24/10/17.
 */

var principal = function () {

    function recuperaTexto() {
        console.log("Agregar");

        var texto = $('#mientrada').val();

        if (texto !== "") {
            $('#body-detalle').append('<tr><td>' + texto + '</td></tr>');
            $('#mientrada').val("");
        }
    }

    $('#b-agregar').on('click', function () {
        recuperaTexto();

    });

    $('#mientrada').on('keypress',function (event) {
        if(event.keyCode==13){
            recuperaTexto();
        }
    });

    $('#b-borrar').on('click',function () {
        console.log("Borrar");
        $("#body-detalle tr:last").remove();
    });

    $('#b-descarga').on('click',function () {

        var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $('.gallery').remove();
        var texto = $('#mientrada2').val();
        $.getJSON(url,
            {tags: texto , tagmore: "any" , format: "json"},
            function (data) {
                data.items.forEach(function (elemento) {
                    $('#imagenes').append('<img src="' + elemento.media.m  + '" class="gallery">');

                    //$('#imagenes').append($('<img>').attr('src',elemento.media.m).append('class','gallery'));

                })
            });
        /*
        var mijson = '{"nombre":"Hector","apellido":"Sanchez"}';
        var miobjeto = JSON.parse(mijson)
*/
/*        var miarreglo = ["uno", "dos", "tres"];
        miarreglo.push("cuatro");

        miarreglo.forEach(function (elemento) {
           console.log(elemento)
        });
*/
        //console.log(miarreglo);




    });

};

$(document).ready(principal);