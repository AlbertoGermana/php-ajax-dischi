<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Api Musica</title>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="main.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="site">
          <div class="container-select">
            <label for="genre">Seleziona il tuo genere preferito: </label>
            <select name="genre" id="select-genre">
              <option value=""></option>
              <option value="pop">pop</option>
              <option value="rock">rock</option>
              <option value="metal">metal</option>
              <option value="jazz">jazz</option>
            </select>
          </div>

          <div class="container">
            <!-- Qui Handlebars caricherà il template -->
          </div>

        </div>

        <script id="entry-template" type="text/x-handlebars-template">
            <div class="card" data-genre="{{genre}}">
                <img src="{{cover}}">
                <span class="title">{{title}}</span>
                <span class="artist">{{artist}}</span>
                <span class="genre">{{genre}}</span>
                <span class="year">{{year}}</span>
            </div>
        </script>



    </body>
</html>
