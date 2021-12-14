const {models} = require('../models');

exports.list = () => models.phong.findAll({
    include: [{
        model: models.loaiphong,
        required: true,
        as: 'LoaiPhong_loaiphong',
        where: {}
    }],
    raw: true,
});
