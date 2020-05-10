$(document).ready(function(){
    // preparo handlebars
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    //chiamata all'api
    $.ajax({
        url: 'api.php',
        method: "GET",
        success: function(risultato){
            //salvo tutto il risultato dentro la variabile
            var listaAlbum = risultato;//.response

            //scorro col ciclo per stampare in html tutti gli elementi
            // completi di dati grazie all'aiuto di handlebars
            for(var i = 0; i < listaAlbum.length; i++) {
                //alla singola iterazione salvo i dati dell'album nella variabile
                var albumCorrente = listaAlbum[i];

                //variabile da far "digerire" a handlebars con i dati da stampare su html
                var context = {
                    cover: albumCorrente.poster,
                    title: albumCorrente.title,
                    genre: albumCorrente.genre,
                    artist: albumCorrente.author,
                    year: albumCorrente.year
                }

                //in questa variabile salvo ciò che deve essere passato in html
                var html = template(context);
                //appendo html ad ogni iterazione creando una nuova "card"
                $('.container').append(html);
            }
        },
        error: function(){}
    });

});
