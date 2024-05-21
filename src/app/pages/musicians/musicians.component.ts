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


@Component({
  selector: 'app-musicians',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, FormsModule, MatOptionModule,HttpClientModule,MatFormFieldModule,
    MatSelectModule,MatMenuModule],
  templateUrl: './musicians.component.html',
  styleUrl: './musicians.component.css',
})


export class MusiciansComponent {
  selectEventCategory(_t11: string) {
    throw new Error('Method not implemented.');
    }
      constants = HOME_CONSTANTS;
      showInstrumentalists: boolean = false;
      filteringPerformed: boolean = false;
      resetFiltering: boolean = false;
    
      instruments: string[] = ["Guitarist", "Pianist", "Violinist", "Drummer", "Bassist", "DJ", "Singer", "Electro Guitarist", "Harpist"];
      cities: string[] = ["Bornova", "Alsancak", "Karsiyaka", "Mavisehir", "Buca", "Balcova", "Konak", "Goztepe"];
    
      selectedInstrument: string = '';
      selectedCity: string = '';
      searchKeyword: string = '';
    
      public instrumentalists: instrumentalist[] = [
        {
          image: 'https://i.ibb.co/nwDnbQt/Guitarist.jpg',
          name: 'Guitarist',
          city: 'Bornova',
          description: 'Find the perfect guitarist for your events with Ritims.',
        },
        {
          image: 'https://i.ibb.co/nBzRKQs/Pianist.jpg',
          name: 'Pianist',
          city: 'Alsancak',
          description: 'Hire professional pianists with ease at Ritims.',
        },
        {
          image: 'https://i.ibb.co/WsxLR1h/Violin.jpg',
          name: 'Violinist',
          city: 'Karsiyaka',
          description: 'Book the perfect violin teacher with Ritims.',
        },
        {
          image: 'https://i.ibb.co/4p4r76c/Drum.jpg',
          name: 'Drummer',
          city: 'Mavisehir',
          description: 'Discover drummers feel the rhythm and make the beat.',
        },
        {
          image: 'https://i.ibb.co/z6zJ5zs/Bass.jpg',
          name: 'Bass Guitarist',
          city: 'Buca',
          description: 'Find professional bassists for private lessons.',
        },
        {
          image: 'https://i.ibb.co/wBXDTtn/DJ.jpg',
          name: 'DJ',
          city: 'Balcova',
          description: 'Rock your event with a DJ!',
        },
        {
          image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
          name: 'Singer',
          city: 'Konak',
          description: 'Hire professional singer with ease at Ritims.',
        },
        {
          image: 'https://i.ibb.co/nwDnbQt/Guitarist.jpg',
          name: 'Electro Guitarist',
          city: 'Alsancak',
          description:
            'Find the perfect electro guitarist for your events with Ritims.',
        },
        {
          image: 'https://i.ibb.co/RHcCtYy/Harp.jpg',
          name: 'Harpist',
          city: 'Goztepe',
          description: 'Discover harpist feel the rhythm and make the beat.',
        },
      ];

      originalInstrumentalists: instrumentalist[];

    
      constructor() { 
        this.originalInstrumentalists = [...this.instrumentalists];

      }
    
      filterEvents() {
        this.instrumentalists = [...this.originalInstrumentalists];
      
        if (this.selectedInstrument) {
          this.instrumentalists = this.instrumentalists.filter(
            (type) => type.name === this.selectedInstrument
          );
        }
      
        if (this.searchKeyword) {
          const keyword = this.searchKeyword.toLowerCase();
          this.instrumentalists = this.instrumentalists.filter(
            (type) =>
              type.name.toLowerCase().includes(keyword) ||
              type.city.toLowerCase().includes(keyword)
          );
        }
      
        if (this.selectedCity) {
          this.instrumentalists = this.instrumentalists.filter(
            (type) => type.city === this.selectedCity
          );
        }
      
        this.showInstrumentalists = true;
        this.filteringPerformed = true;
        this.resetFiltering = true;
      }
      

      resetFilter() {
        this.selectedInstrument = '';
        this.selectedCity = '';
        this.searchKeyword = '';
          this.filteringPerformed = false;
          this.resetFiltering = false;
          this.showInstrumentalists = false;
          this.instrumentalists = [...this.originalInstrumentalists];
        }
      
    }

    export interface instrumentalist {
      city: string;
      image: string;
      name: string;
      description: string;
    }
