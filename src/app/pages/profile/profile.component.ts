import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    // Oturumu sonlandır
    this.authService.setLoggedIn(false);
    // Giriş ve kayıt sayfalarına yönlendir
    this.router.navigate(['/login']);
  }
}
