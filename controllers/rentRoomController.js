var model = require("../model/model")

module.exports.list = async(req, res, next) => {
    //TODO
    res.render('rentRoom');
}

module.exports.getRoom = async(req, res, next) => {
    //TODO
    model.getRoom.then(result => {
        console.log(result);
        res.send(result);

    }).catch(err => {
        console.log(err);
        res.send(err.message);
    });

};


module.exports.getCustomer = async(req, res, next) => {
    //TODO
    model.getCustomer.then(result => {
        console.log(result);
        res.send(result);

    }).catch(err => {
        console.log(err);
        res.send(err.message);
    });

};