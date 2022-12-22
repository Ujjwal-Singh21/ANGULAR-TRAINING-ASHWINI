import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(
      (isuserloggedinfromauthservice: boolean) => {
        this.isUserLoggedIn = isuserloggedinfromauthservice;
      }
    )
  }

}
