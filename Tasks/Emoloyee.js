"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(empId, empName, empSalary) {
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    Employee.prototype.getEmpId = function () {
        return this.empId;
    };
    Employee.prototype.getEmpName = function () {
        return this.empName;
    };
    Employee.prototype.getEmpSalary = function () {
        return this.empSalary;
    };
    return Employee;
}());
exports.Employee = Employee;
