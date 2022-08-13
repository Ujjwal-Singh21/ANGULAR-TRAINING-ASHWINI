export class Employee {

  private empId:number;
  private empName:string;
  private empSalary:number;

  constructor(empId:number, empName:string, empSalary:number) {
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