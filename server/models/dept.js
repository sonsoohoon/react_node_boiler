/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return dept.init(sequelize, DataTypes);
}

class dept extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    deptId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      field: 'dept_id'
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dept',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dept_id" },
        ]
      },
    ]
  });
  return dept;
  }
}
