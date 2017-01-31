const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', './src/views');

const handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', function (req, res) {
   res.render('index');
});

const server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port);
});