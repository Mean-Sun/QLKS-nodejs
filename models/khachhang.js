const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khachhang', {
    MaKH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TenKH: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CMND: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SDT: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DiaChi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LoaiKH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'loaikh',
        key: 'MaLoai'
      }
    }
  }, {
    sequelize,
    tableName: 'khachhang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaKH" },
        ]
      },
      {
        name: "FK_KhachHang_LoaiKH",
        using: "BTREE",
        fields: [
          { name: "LoaiKH" },
        ]
      },
    ]
  });
};
