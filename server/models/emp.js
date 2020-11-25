/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return emp.init(sequelize, DataTypes);
}

class emp extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    empId: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      field: 'emp_id'
    },
    deptId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'dept',
        key: 'dept_id'
      },
      field: 'dept_id'
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emp_id" },
        ]
      },
      {
        name: "deptfk",
        using: "BTREE",
        fields: [
          { name: "dept_id" },
        ]
      },
    ]
  });
  return emp;
  }
}
