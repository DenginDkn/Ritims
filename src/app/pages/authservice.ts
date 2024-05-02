import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  

  constructor() { }

  // Oturum durumunu güncellemek için metod
  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  // Oturum durumunu kontrol etmek için metod
  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
