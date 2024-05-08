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
import { EmailService } from '../../email.service'; // EmailService'i import et
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
  user: { name: string, email: string, city: string } = { name: '', email: '', city: '' };
  editMode: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private emailService: EmailService // EmailService'i inject et
  ) {}

  ngOnInit(): void {
    // Kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz
    if (this.authService.isLoggedInUser()) {
      // EmailService aracılığıyla kullanıcının e-posta bilgisini al
      const userEmail = this.emailService.getUserEmail();
      
      // Kullanıcının bilgilerini alma işlemi
      this.http.get<any>(`http://localhost:5188/api/Users/GetByEmail/${userEmail}`)
        .subscribe(
          (response: any) => {
            console.log(response); // API'den gelen yanıtı konsola yazdır
            this.user = response; // Kullanıcının bilgilerini sakla
          },
          (error) => {
            console.error('Error fetching user profile:', error);
          }
        );

        this.http.get<any>(`http://localhost:5188/api/Musicians/GetByEmail/${userEmail}`)
        .subscribe(
          (response: any) => {
            console.log(response); // API'den gelen yanıtı konsola yazdır
            this.user = response; // Kullanıcının bilgilerini sakla
          },
          (error) => {
            console.error('Error fetching user profile:', error);
          }
        );

      // Profil formunu oluştur
      this.profileForm = this.fb.group({
        name: [this.user.name, Validators.required],
        email: [{value: this.user.email, disabled: true}, [Validators.required, Validators.email]], // E-posta alanını pasif hale getir
        city: [this.user.city, Validators.required]
      });
    } else {
      // Kullanıcı giriş yapmamışsa, istenilen işlemi yapabiliriz. Örneğin, başka bir sayfaya yönlendirme yapabiliriz.
      this.router.navigate(['/login']);
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    // Eğer düzenleme modu ise, profil formunu kullanıcının bilgileri ile doldur
    if (this.editMode) {
      this.profileForm.patchValue(this.user);
    }
  }

  signOut() {
    // Oturumu sonlandır
    this.authService.setLoggedIn(false);
    // Giriş ve kayıt sayfalarına yönlendir
    this.router.navigate(['/login']);
  }

}
