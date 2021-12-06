const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

//create app
const app = express();


//config view engine
var hbs = exphbs.create({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, './views'),
    layoutsDir: path.join(__dirname, './views/layouts')

});
//use view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//bodyparsers
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


//set static folder
app.use(express.static(path.join(__dirname, 'publics')));


app.get('/', (req, res) => {
    res.render('home', { title: "Hompage", layout: 'main' });
});

app.listen(3000);