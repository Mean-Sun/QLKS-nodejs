const { models } = require('../models');

exports.list = () => models.loaiphong.findAll({raw: true});