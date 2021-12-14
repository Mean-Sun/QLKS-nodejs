const  roomService = require('../services/roomService');

exports.list = async (req, res, next) => {
    const rooms = await roomService.list();
    res.render('room', {rooms});
}
