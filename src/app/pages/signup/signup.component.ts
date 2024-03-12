import { Component } from '@angular/core';
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
export class SignupComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  musician = new FormControl(false);

  apiUrl = 'http://localhost:5188/api/Users';

  constructor(private http: HttpClient) {}

  getErrorMessage(field: FormControl) {
    if (field.hasError('required')) {
      return 'You must enter a value';
    }
    if (field === this.email && field.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  sendPostRequest() {
    

    const userData = {
      email: this.email.value,
      name: this.name.value,
      city: this.city.value,
      password: this.password.value,
      musician: this.musician.value
    };

    console.log('Email şu',this.email.value);

    this.http.post(this.apiUrl, userData)
      .subscribe(
        (response) => {
          console.log('Post request successful:', response);
          // Burada gelen cevaba göre isteğin başarılı olduğunu kullanıcıya bildirebilirsiniz
        },
        (error) => {
          console.error('Post request error:', error);
          // Hata durumunda kullanıcıya uygun bir mesaj gösterebilirsiniz
        }
      );
  }
}
