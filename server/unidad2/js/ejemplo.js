/**
 * Created by Hector on 29/10/17.
 */



function recupera() {

        var texto = $('#entrada').val();
        if(texto!="") {
            $('#t-agrega').append('<tr><td>' + texto + '</td></tr>');
            $('#entrada').val("");
        }
}

$('#agrega').on('click',function () {
   recupera();

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $('.gallery').remove();
    var text = $('#entrada').val();
    $.getJSON(url,
        {tags:text, tagmore:"any",format:"json"},
        function (data) {
            data.items.forEach(function (elemto) {
                $('#imag').append('<img src="'+elemto.media.m+'" class="gallery">');
            })
        });
});

$('#borra').on('click', function (elemento) {
    $('#t-agrega tr:last-child').remove();
});

$('#entrada').on('keypress',function (event) {
    if(event.keyCode==13){
        recupera();
    }
});



$(document).ready(principal);