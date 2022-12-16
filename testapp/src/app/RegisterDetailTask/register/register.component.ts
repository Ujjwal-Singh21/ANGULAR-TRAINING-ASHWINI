import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/shared/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerForm = new EventEmitter<Register>();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(registerForm: NgForm) {
    let newUser = new Register(registerForm.value.name, registerForm.value.mobileno, registerForm.value.email,
      registerForm.value.address, registerForm.value.aadharno, registerForm.value.pancardno,
      registerForm.value.location);

      this.registerForm.emit(newUser);
  }

}
