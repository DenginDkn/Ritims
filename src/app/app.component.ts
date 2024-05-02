import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
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
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  imports: [
    FooterComponent,
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
    ProfileComponent,
    HttpClientModule,
  ],
})
export class AppComponent {
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Eğer router ana sayfaya gittiğinde footer'ı göster
        this.showFooter = (this.router.url === '/home') ||
                          (this.router.url === '/events') ||
                          (this.router.url === '/profile') ||
                          (this.router.url === '/musicians');
      }
    });
  }
}


