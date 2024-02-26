import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { MusiciansComponent } from './pages/musicians/musicians.component';
import { EventsComponent } from './pages/events/events.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    HomeComponent,
    HeaderComponent,
    MusiciansComponent,
    EventsComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent
  ],
})
export class AppComponent {
  showHeader: boolean = true;
  showAppComponent: boolean = true;
  title = 'angular-website';
showFooter: any;
}
