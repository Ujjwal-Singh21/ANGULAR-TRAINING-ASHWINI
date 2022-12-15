import { Employee } from './Employee'

const emp1 = new Employee(101, 'Steve', 5000)
const emp2 = new Employee(102, 'Clarke', 3000)
const emp3 = new Employee(103, 'Diana', 2500)
const emp4 = new Employee(104, 'Tony', 9000)
const emp5 = new Employee(105, 'Vishwas', 15000)

let employeeArr: Employee[] = [emp1, emp2, emp3, emp4, emp5]

// 1) Sorting employee based on salary
//------------------------------------
employeeArr.sort((emp1, emp2) =>emp1.getEmpSalary() > emp2.getEmpSalary() ? -1 : 1)
console.log('After sorting: ', employeeArr)

// 2) Highest earning employee
//----------------------------

// approach-1:
//------------
const highestEarnEmp = employeeArr[0]
console.log('Highest Earning Employee Approach-1:', highestEarnEmp)

// approach-2:
//------------
const highestEarningEmp = employeeArr.reduce((emp1, emp2) =>
  emp1.getEmpSalary() > emp2.getEmpSalary() ? emp1 : emp2
)

console.log('Highest Earning Employee Approach-2:', highestEarningEmp)
