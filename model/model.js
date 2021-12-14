var mysql = require('mysql');

//online data base, mysql on Cpanel
/* var pool = mysql.createPool({
    connectionLimit: 2000,
    host: "testlogin.xyz",
    user: "teslogin_tester_meansun",
    password: "meansun123456",
    database: "teslogin_qlks",
}); */



//localhost data bae php admin
var pool = mysql.createPool({
    connectionLimit: 2000,
    host: "localhost",
    user: "testqlks",
    password: "123456",
    database: "qlks",
});


//export pool
module.exports = pool