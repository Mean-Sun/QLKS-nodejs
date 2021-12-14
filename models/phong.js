const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phong', {
    MaPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LoaiPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'loaiphong',
        key: 'MaLoai'
      }
    },
    TinhTrang: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    GhiChu: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TenPhong: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaPhong" },
        ]
      },
      {
        name: "FK_Phong_LoaiPhong",
        using: "BTREE",
        fields: [
          { name: "LoaiPhong" },
        ]
      },
    ]
  });
};
