var DataTypes = require("sequelize").DataTypes;
var _ct_phieuthuephong = require("./ct_phieuthuephong");
var _hoadon = require("./hoadon");
var _khachhang = require("./khachhang");
var _loaikh = require("./loaikh");
var _loaiphong = require("./loaiphong");
var _nhanvien = require("./nhanvien");
var _phieuthuephong = require("./phieuthuephong");
var _phong = require("./phong");
var _quydinh = require("./quydinh");

function initModels(sequelize) {
  var ct_phieuthuephong = _ct_phieuthuephong(sequelize, DataTypes);
  var hoadon = _hoadon(sequelize, DataTypes);
  var khachhang = _khachhang(sequelize, DataTypes);
  var loaikh = _loaikh(sequelize, DataTypes);
  var loaiphong = _loaiphong(sequelize, DataTypes);
  var nhanvien = _nhanvien(sequelize, DataTypes);
  var phieuthuephong = _phieuthuephong(sequelize, DataTypes);
  var phong = _phong(sequelize, DataTypes);
  var quydinh = _quydinh(sequelize, DataTypes);

  phieuthuephong.belongsTo(hoadon, { as: "MaHD_hoadon", foreignKey: "MaHD"});
  hoadon.hasMany(phieuthuephong, { as: "phieuthuephongs", foreignKey: "MaHD"});
  ct_phieuthuephong.belongsTo(khachhang, { as: "MaKH_khachhang", foreignKey: "MaKH"});
  khachhang.hasMany(ct_phieuthuephong, { as: "ct_phieuthuephongs", foreignKey: "MaKH"});
  hoadon.belongsTo(khachhang, { as: "MaKH_khachhang", foreignKey: "MaKH"});
  khachhang.hasMany(hoadon, { as: "hoadons", foreignKey: "MaKH"});
  khachhang.belongsTo(loaikh, { as: "LoaiKH_loaikh", foreignKey: "LoaiKH"});
  loaikh.hasMany(khachhang, { as: "khachhangs", foreignKey: "LoaiKH"});
  phong.belongsTo(loaiphong, { as: "LoaiPhong_loaiphong", foreignKey: "LoaiPhong"});
  loaiphong.hasMany(phong, { as: "phongs", foreignKey: "LoaiPhong"});
  ct_phieuthuephong.belongsTo(phieuthuephong, { as: "MaPhong_phieuthuephong", foreignKey: "MaPhong"});
  phieuthuephong.hasMany(ct_phieuthuephong, { as: "ct_phieuthuephongs", foreignKey: "MaPhong"});
  ct_phieuthuephong.belongsTo(phieuthuephong, { as: "NgayThue_phieuthuephong", foreignKey: "NgayThue"});
  phieuthuephong.hasMany(ct_phieuthuephong, { as: "NgayThue_ct_phieuthuephongs", foreignKey: "NgayThue"});
  phieuthuephong.belongsTo(phong, { as: "MaPhong_phong", foreignKey: "MaPhong"});
  phong.hasMany(phieuthuephong, { as: "phieuthuephongs", foreignKey: "MaPhong"});

  return {
    ct_phieuthuephong,
    hoadon,
    khachhang,
    loaikh,
    loaiphong,
    nhanvien,
    phieuthuephong,
    phong,
    quydinh,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
