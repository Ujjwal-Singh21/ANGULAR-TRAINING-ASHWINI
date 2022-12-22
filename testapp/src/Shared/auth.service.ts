import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isUserLoggedIn = new Subject<boolean>()

  constructor () {}

  onLogIn (username: string, password: string) {
    if (username == 'admin@gmail.com' && password == 'admin') {
      this.isUserLoggedIn.next(true)
      return true
    } else {
      return false
    }
  }

  onLogOut () {
    this.isUserLoggedIn.next(false)
  }
}
