var DataTypes = require("sequelize").DataTypes;
var _dept = require("./dept");
var _emp = require("./emp");

function initModels(sequelize) {
  var dept = _dept(sequelize, DataTypes);
  var emp = _emp(sequelize, DataTypes);

  emp.belongsTo(dept, { foreignKey: "deptId"});
  dept.hasMany(emp, { foreignKey: "deptId"});

  return {
    dept,
    emp,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
