export class Employee {

  public id:number;
  public name:string;
  public salary:number;
  public imagepath:string;
  public skillset: string[];

  public constructor(name:string, salary:number, imagepath:string, skillset:string[] = []) {
    this.name = name;
    this.salary = salary;
    this.imagepath = imagepath;
    this.skillset = skillset;
  }
}