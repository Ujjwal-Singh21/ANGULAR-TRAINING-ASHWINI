export class Employee {

  public empId:number;
  public empName:string;
  public empSalary:number;

  public constructor(empId:number, empName:string, empSalary:number) {
    this.empId = empId;
    this.empName = empName;
    this.empSalary = empSalary;
  }
}