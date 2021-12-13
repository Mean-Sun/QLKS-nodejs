const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
//require('dotenv').config();
const port = process.env.PORT || 5000;
//create app
const app = express();

//config view engine
const hbs = exphbs.create({
    defaultLayout: 'layout',
    extname: '.hbs'
});

const authRouter = require('./routes/authRoute');
const homeRouter = require('./routes/homeRoute');
const rentRoomRouter = require('./routes/rentRoomRoute');
const typeofRoomRouter = require('./routes/typeofRoomRouter');
const roomRouter = require('./routes/roomRouter');

//use view engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


//set static folder
app.use(express.static(path.join(__dirname, '/publics/')));

app.use('/', homeRouter);
app.use('/rent-room', rentRoomRouter);
app.use('/typeofRoom', typeofRoomRouter);
app.use('/room', roomRouter);
app.use('/', authRouter);


// catch 404 and forward to error handler
//TODO
//app.use('*', (req, res) => res.render('404', { layout: '404' }))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))