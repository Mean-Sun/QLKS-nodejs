const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hoadon', {
    MaHD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaKH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'khachhang',
        key: 'MaKH'
      }
    },
    NgayLap: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    GiaTri: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hoadon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaHD" },
        ]
      },
      {
        name: "FK_HoaDon_KhachHang",
        using: "BTREE",
        fields: [
          { name: "MaKH" },
        ]
      },
    ]
  });
};
