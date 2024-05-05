import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = false;
  
  constructor() { }

  // Kullanıcının oturum durumunu güncellemek için metod
  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  // Kullanıcının oturum durumunu kontrol etmek için metod
  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
