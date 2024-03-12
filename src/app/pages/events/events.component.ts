import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HOME_CONSTANTS } from '../../constants';
import { FormsModule } from '@angular/forms';
import {MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MusicServiceType } from '../home/home.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, FormsModule, MatOptionModule,HttpClientModule,MatFormFieldModule,
    MatSelectModule,MatMenuModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})


export class EventsComponent {
selectEventCategory(_t11: string) {
throw new Error('Method not implemented.');
}
  constants = HOME_CONSTANTS;
  showMusicServiceTypes: boolean = false;
  filteringPerformed: boolean = false;
  resetFiltering: boolean = false;



  eventCategories: string[] = ["Live Performances", "Music Lessons", "Recording Sessions"]; 
  cities: string[] = ["Izmir", "Istanbul", "Ankara", "Eskisehir", "Antalya", "Aydın"];

  selectedEventCategory: string = '';
  selectedCity: string = '';
  searchKeyword: string = '';

  public musicServiceTypes: MusicServiceType[] = [
    {
      image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
      name: 'Live Performances',
      city: 'Izmir',
      description: 'Find the perfect live performance for your event in Izmir.',
    },
    {
      image: 'https://i.ibb.co/SP9vx2j/Musician2.jpg',
      name: 'Music Lessons',
      city:'Istanbul',
      description: 'Hire the perfect music teacher with Ritims in Istanbul.',
    },
    {
      image: 'https://i.ibb.co/0yRx9YN/Musician3.jpg',
      name: 'Recording Sessions',
      city:'Ankara',
      description: 'Book the best recording sessions at Ritims now in Ankara.',
    },
  ];
  originalMusicServiceTypes: MusicServiceType[];

  constructor() { 
    this.originalMusicServiceTypes = [...this.musicServiceTypes];
  }

  filterEvents() {
  
    // Filter music service types based on the selected event category
    if (this.selectedEventCategory) {
      this.musicServiceTypes = this.musicServiceTypes.filter(type => type.name === this.selectedEventCategory);
    }

    if(this.searchKeyword){
      this.musicServiceTypes = this.musicServiceTypes.filter(type => type.name ===this.searchKeyword );
    }

    if(this.selectedCity){
      this.musicServiceTypes = this.musicServiceTypes.filter(type => type.city === this.selectedCity);
    }

    this.showMusicServiceTypes = true;
    this.filteringPerformed = true;
    this.resetFiltering = true;

  }
  resetFilter() {
  this.selectedEventCategory = '';
  this.selectedCity = '';
  this.searchKeyword = '';
    this.filteringPerformed = false;
    this.resetFiltering = false;
    this.showMusicServiceTypes = false;
    this.musicServiceTypes = [...this.originalMusicServiceTypes];
  }
  
}
