import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_CONSTANTS } from '../../constants';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constants = HOME_CONSTANTS;
}
