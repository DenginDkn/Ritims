import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    MatDividerModule,],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userUrl= 'http://localhost:5188/api/Users';
  user: { name: string, email: string, city: string } = { name: '', email: '', city: '' };

  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // Kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz
    if (this.authService.isLoggedInUser()) {
      // Kullanıcı giriş yapmışsa, profil bilgilerini alma işlemi devam eder
      this.profileForm = this.fb.group({
        name: ['dd', Validators.required],
        email: ['213213', [Validators.required, Validators.email]],
        city: ['123123', Validators.required]
      });

    // Kullanıcının bilgilerini almak için HTTP isteği yapılır
    const userData = this.profileForm.value;
    
    this.http.get<any>(this.userUrl)
    .subscribe(
      (response: any) => {
        console.log(response); // API'den gelen yanıtı konsola yazdır
        this.user = response; // Kullanıcının bilgilerini sakla
        this.profileForm.patchValue({
          name: this.user.name,
          email: this.user.email,
          city: this.user.city
        });
        console.log(userData);
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  } else {
    // Kullanıcı giriş yapmamışsa, istenilen işlemi yapabiliriz. Örneğin, başka bir sayfaya yönlendirme yapabiliriz.
    this.router.navigate(['/login']);
  }
}
  signOut() {
    // Oturumu sonlandır
    this.authService.setLoggedIn(false);
    // Giriş ve kayıt sayfalarına yönlendir
    this.router.navigate(['/login']);
  }

}


