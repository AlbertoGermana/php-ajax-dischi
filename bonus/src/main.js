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
            var listaAlbum = risultato;

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
        },//fine success
        error: function(){}
    });

    // Filtro e chiamata Ajax per la ricerca dell'artista
    $('#searchField').keyup(function(){
        // salvo input utente in campo del filtro
        var testoInserito = $(this).val().toLowerCase();

        //chiamata ajax per cercare artisti
        $.ajax({
          url: 'api.php',
          method: "GET",
          success: function(risultato){
            for (var i = 0; i < risultato.length; i++) {
              var artista = risultato[i].author;
              // se l'artista trovato contiene i caratteri digitati
              if(artista.toLowerCase().includes(testoInserito)){
                //per ogni artista stampato in html
                $('.artist').each(function(){
                   // se il testo digitato è incluso tra i nomi scritti in html
                   if($(this).text().toLowerCase().includes(testoInserito)){
                       // mostro i risultati
                       $(this).parent().show();
                   }else{
                       // escludo quelli che non contengono le lettere digitate
                       $(this).parent().hide();
                   }//fine if
               });//fine each
             };//fine if
           };//fine for
         },//fine success
          error: function(err){
            console.log('errore nella ricerca dell\'artista');
          }
        });//fine chiamata ajax
    });//fine keyup
});//fine document.ready
