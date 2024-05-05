// email.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private userEmail: string = ''; // E-posta bilgisini tutacak özel bir değişken

  constructor() { }

  setUserEmail(email: string) {
    this.userEmail = email; // Kullanıcının e-posta bilgisini ayarlamak için kullanılacak metod
  }

  getUserEmail(): string {
    return this.userEmail; // Kullanıcının e-posta bilgisini döndürecek metod
  }
}
