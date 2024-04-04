import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 
import { MatDividerModule } from '@angular/material/divider';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    MatDividerModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  apiUrl = 'http://localhost:5188/api/login';
  loginError: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { } 

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  getErrorMessage(field: string) {
    const control = this.loginForm.get(field);
    if (control === null) {
      return '';
    }
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    if (field === 'email' && control.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  sendLoginRequest() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      console.log(userData);
      this.http.post(this.apiUrl, userData)
        .subscribe(
          (response: any) => {
            console.log('Login response:', response);
            if (response.message === 'Login successful') { // Response.message'ı kontrol et
              console.log('Login successful:', response);
              this.loginError = ''; // Herhangi bir önceki hata mesajını temizle
              alert('Welcome to Ritims!');
              this.router.navigate(['/home']); // Ana sayfaya yönlendir
            } else {
              this.loginError = 'Login failed. Please check your credentials.';
              alert('Wrong password or email!');
            }
          },
          (error) => {
            alert('Wrong password or email!');
            console.error('Login error:', error);
            this.loginError = 'An error occurred while logging in.';
          }
        );
    }
  }
  
}

