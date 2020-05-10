let mix = require('laravel-mix');
mix.js('src/main.js', 'dist/')
.sass('src/style.scss', 'dist/')
.copy('src/index.php', 'dist/')
.copy('src/api.php', 'dist/')
.copy('src/db.php', 'dist/');
