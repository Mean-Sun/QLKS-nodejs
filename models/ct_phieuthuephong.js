const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ct_phieuthuephong', {
    MaPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'phieuthuephong',
        key: 'MaPhong'
      }
    },
    NgayThue: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'phieuthuephong',
        key: 'NgayThue'
      }
    },
    MaKH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'khachhang',
        key: 'MaKH'
      }
    }
  }, {
    sequelize,
    tableName: 'ct_phieuthuephong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaPhong" },
          { name: "NgayThue" },
          { name: "MaKH" },
        ]
      },
      {
        name: "FK_CT_ThuePhong_KhachHang",
        using: "BTREE",
        fields: [
          { name: "MaKH" },
        ]
      },
      {
        name: "FK_CT_ThuePhong_ThuePhong",
        using: "BTREE",
        fields: [
          { name: "NgayThue" },
          { name: "MaPhong" },
        ]
      },
    ]
  });
};
