export class Job {

  public id: number;
  public title:string;
  public description:string;
  public location:string;

  constructor(title:string, description:string, location:string) {
    this.title = title;
    this.description = description;
    this.location = location;
  }
}