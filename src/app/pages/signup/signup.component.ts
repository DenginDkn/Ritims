import { Component, OnInit } from '@angular/core';
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
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
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
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup; // Ensure it's initialized in ngOnInit

  apiUrl = 'http://localhost:5188/api/Users';

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      musician: [false]
    });
  }

  getErrorMessage(field: string) {
    const control = this.signupForm.get(field);
    if (control === null) {
      return ''; // Return empty string or handle accordingly if control is null
    }
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    if (field === 'email' && control.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  sendPostRequest() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      console.log(userData);
      this.http.post(this.apiUrl, userData)
        .subscribe(
          (response) => {
            console.log('Post request successful:', response);
            // Handle successful response
          },
          (error) => {
            console.error('Post request error:', error);
            // Handle error response
          }
        );
    }
  }
}

