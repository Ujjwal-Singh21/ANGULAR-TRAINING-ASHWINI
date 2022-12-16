export class Register {

  public name: string;
  public mobileNo: number;
  public email: string;
  public address: string;
  public aadharNo: number;
  public pancardNo: number;
  public location: string;

  constructor(name: string, mobileNo: number, email: string, address: string,
    aadharNo: number, pancardNo: number, location: string) {
      this.name = name;
      this.mobileNo = mobileNo;
      this.email = email;
      this.address = address;
      this.aadharNo = aadharNo;
      this.pancardNo = pancardNo;
      this.location = location;
    }
}