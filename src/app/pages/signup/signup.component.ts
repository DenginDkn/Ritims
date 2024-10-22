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
  apiUrlMusician = 'http://localhost:5188/api/Musicians';

  signupError: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  

  getErrorMessage(field: string) {
    const control = this.signupForm.get(field);
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

  
  
  sendPostRequest() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      if (userData.password !== userData.confirmPassword) {
        this.signupError = 'Passwords do not match';
        return;
      }
      this.signupError = ''; // Eşleşme doğruysa hatayı temizle
      this.http.post(this.apiUrl, userData)
        .subscribe(
          (response) => {
            console.log('Post request successful:', response);
            alert("Signed up User succesfully, now you can login to Ritims!")
            this.router.navigate(['/login']); 
          },
          (error) => {
            console.error('Post request error:', error);
          }
        );
    }
  }
  
  sendPostRequestMusician() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      if (userData.password !== userData.confirmPassword) {
        this.signupError = 'Passwords do not match';
        return;
      }
      this.signupError = ''; // Eşleşme doğruysa hatayı temizle
      this.http.post(this.apiUrlMusician, userData)
        .subscribe(
          (response) => {
            console.log('Post request successful:', response);
            alert("Signed up Musician succesfully, now you can login to Ritims!")
            this.router.navigate(['/login']); 
          },
          (error) => {
            console.error('Post request error:', error);
          }
        );
    }
  }
  
}

