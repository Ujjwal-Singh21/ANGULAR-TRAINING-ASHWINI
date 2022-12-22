import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginHandler() {
     let flag = this.authService.onLogIn(this.username, this.password);
     if(flag) {
      this.router.navigate(['products']);
     }
  }

}
