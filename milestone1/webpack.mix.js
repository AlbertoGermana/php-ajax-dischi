let mix = require('laravel-mix');
mix.js('src/app.js', 'dist/')
.sass('src/app.scss', 'dist/')
.copy('src/index.php', 'dist/')
.copy('src/api.php', 'dist/')
.copy('src/db.php', 'dist/');
