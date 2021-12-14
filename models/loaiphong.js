const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loaiphong', {
    MaLoai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TenLoai: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DonGia: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loaiphong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaLoai" },
        ]
      },
    ]
  });
};
