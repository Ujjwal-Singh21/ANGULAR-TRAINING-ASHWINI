import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  statictime = new Date().toString();

  runningtime = new Observable<string>((observer) => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  })

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
