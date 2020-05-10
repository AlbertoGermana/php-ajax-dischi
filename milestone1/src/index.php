<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Api Musica</title>
        <?php include 'db.php' ?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="app.js"></script>
        <link rel="stylesheet" href="app.css">
    </head>
    <body>

      <div class="container">
        <?php foreach ($db as $album) {

            ?><div class="card" data-genre="genre">
                <img src="<?php echo $album['poster']; ?>">
                <span class="title"><?php echo $album['title']; ?></span>
                <span class="artist"><?php echo $album['artist']; ?></span>
                <span class="genre"><?php echo $album['genre']; ?></span>
                <span class="year"><?php echo $album['year']; ?></span>
            </div>
          <?php  } ?>
        </div>
    </body>
</html>
