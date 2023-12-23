import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { EventsComponent } from './events/events.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    HeaderComponent,
    MusiciansComponent,
    EventsComponent,
    SignupComponent,
    LoginComponent,
  ],
})
export class AppComponent {
  showAppComponent: boolean = true;
  title = 'angular-website';
}
