const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quydinh', {
    Key: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    Value: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'quydinh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Key" },
        ]
      },
    ]
  });
};
