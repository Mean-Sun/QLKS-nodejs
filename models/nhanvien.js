const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nhanvien', {
    MaNV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TenNV: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DiaChi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NgaySinh: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SDT: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MatKhau: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Role: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nhanvien',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaNV" },
        ]
      },
    ]
  });
};
