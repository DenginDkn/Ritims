import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  apiUrl = 'http://localhost:5188/api/login';

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) { }

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
            console.log('Login successful:', response);
            alert('Hoşgeldiniz, giriş başarılı!');
            this.router.navigate(['/home']); 
          },
          (error) => {
            console.error('Login error:', error);
            alert('Hatalı kullanıcı adı ya da şifre!')
          }
        );
    }
  }
}
