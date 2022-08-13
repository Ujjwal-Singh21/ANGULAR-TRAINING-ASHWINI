class Employee {

   empId;
   empName;
   empSalary;

  constructor(empId, empName, empSalary) {
    this.empId=empId;
    this.empName=empName;
    this.empSalary=empSalary
  }

  getEmpId() {
    return this.empId;
  }

  getEmpName() {
    return this.empName;
  }

  getEmpSalary() {
    return this.empSalary;
  }
}

let empList = [];

empList.push(new Employee(1, "Karteek", 25000));
empList.push(new Employee(2, "Rani", 23000));
empList.push(new Employee(3, "Suman", 15000));
empList.push(new Employee(4, "Kumar", 40000));
empList.push(new Employee(5, "Ram", 20000));

var emp = empList.reduce((emp1, emp2) => (emp1.getEmpSalary() > emp2.getEmpSalary()) ? emp1 : emp2)

console.log("Highest paid employee:")
console.log(emp)