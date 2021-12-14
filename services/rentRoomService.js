const {models} = require('../models');

exports.list = () => models.phieuthuephong.findAll({raw: true});
