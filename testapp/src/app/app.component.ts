import { Component } from '@angular/core';
import { Register } from 'src/shared/register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  storeUsers: Register[] = [];

  title = 'testapp';

  onUserAdd(userData: Register) {
    this.storeUsers.push(userData)
    console.log(userData)
  }
}
