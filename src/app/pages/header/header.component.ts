import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_CONSTANTS } from '../../constants';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../authservice';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent implements OnInit {
  constants = HOME_CONSTANTS;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedInUser();
  }
}
