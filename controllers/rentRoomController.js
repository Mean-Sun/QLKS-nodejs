var model = require("../model/model")



module.exports.list = async(req, res, next) => {
    //TODO
    res.render('rentRoom');
}



//trả về danh sách phòng
module.exports.getRoom = async(req, res, next) => {
    //TODO
    model.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM Phong', function(error, results, fields) {

            //do some thing wwith the result
            //console.log(results);
            res.send(results);

            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });

};