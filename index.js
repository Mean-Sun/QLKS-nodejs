const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

//create app
const app = express();


//config view engine
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
});



//use view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');


//bodyparsers
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


//set static folder
app.use(express.static(path.join(__dirname, '/public/')));




app.get('/rent', (req, res) => {
    res.render('rent-room', { layout: 'main', title: 'Thuê phòng' });
});

app.listen(3000);