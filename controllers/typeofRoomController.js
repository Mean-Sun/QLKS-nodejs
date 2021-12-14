const typeofRoomService = require('../services/typeofRoomService');

exports.list = async (req, res, next) => {
    const typeofRoom = await typeofRoomService.list();
    res.render('typeofRoom', {typeofRoom});
}
