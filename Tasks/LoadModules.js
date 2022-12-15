"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var emp1 = new Employee_1.Employee(101, 'Steve', 5000);
var emp2 = new Employee_1.Employee(102, 'Clarke', 3000);
var emp3 = new Employee_1.Employee(103, 'Diana', 2500);
var emp4 = new Employee_1.Employee(104, 'Tony', 9000);
var emp5 = new Employee_1.Employee(105, 'Vishwas', 15000);
var employeeArr = [emp1, emp2, emp3, emp4, emp5];
// 1) Sorting employee based on salary
//------------------------------------
employeeArr.sort(function (emp1, emp2) { return emp1.getEmpSalary() > emp2.getEmpSalary() ? -1 : 1; });
console.log('After sorting: ', employeeArr);
// 2) Highest earning employee
//----------------------------
// approach-1:
//------------
var highestEarnEmp = employeeArr[0];
console.log('Highest Earning Employee Approach-1:', highestEarnEmp);
// approach-2:
//------------
var highestEarningEmp = employeeArr.reduce(function (emp1, emp2) {
    return emp1.getEmpSalary() > emp2.getEmpSalary() ? emp1 : emp2;
});
console.log('Highest Earning Employee Approach-2:', highestEarningEmp);
