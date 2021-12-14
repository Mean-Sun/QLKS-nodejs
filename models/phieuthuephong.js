const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phieuthuephong', {
    MaPhong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'phong',
        key: 'MaPhong'
      }
    },
    NgayThue: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    NgayTra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MaHD: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hoadon',
        key: 'MaHD'
      }
    },
    SoNgaySuDung: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ThanhTien: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TrangThaiThanhToan: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'phieuthuephong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NgayThue" },
          { name: "MaPhong" },
        ]
      },
      {
        name: "FK_PhieuThuePhong_HoaDon",
        using: "BTREE",
        fields: [
          { name: "MaHD" },
        ]
      },
      {
        name: "FK_ThuePhong_Phong",
        using: "BTREE",
        fields: [
          { name: "MaPhong" },
        ]
      },
    ]
  });
};
