import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, this.customValidator])
  })

  constructor(private authService: AuthService, private router: Router) { }

  // validator
  get LoginformControls(): any {
    return this.loginform['controls'];
  }

  // Custom Validator 
  customValidator(control: FormControl): {[key: string]: boolean} | null {
    if(control.value.length < 3) {
      return {'invalid': true}
    }
    return null; 
  }

  ngOnInit(): void {
  }

  // login handler
  onLoginHandler() {
     let flag = this.authService.onLogIn(this.loginform.value.username, this.loginform.value.password);
     if(flag) {
      this.router.navigate(['products']);
     }
  }

}
