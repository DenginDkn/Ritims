import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HOME_CONSTANTS } from '../../constants';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MusicServiceType {
  image: string;
  name: string;
  city: string;
  description: string;
  iframe: string | SafeResourceUrl;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  constants = HOME_CONSTANTS;
  showMusicServiceTypes: boolean = false;
  filteringPerformed: boolean = false;
  resetFiltering: boolean = false;

  eventCategories: string[] = [
    'Hangout Hall',
    'Carnival Venue',
    '6:45 Pub Kordon',
    'Havagazi Fabrikasi',
  ];
  cities: string[] = ['Bornova', 'Karsiyaka', 'Alsancak', 'Kordon'];

  selectedEventCategory: string = '';
  selectedCity: string = '';
  searchKeyword: string = '';

  public musicServiceTypes: MusicServiceType[];
  originalMusicServiceTypes: MusicServiceType[];

  constructor(private sanitizer: DomSanitizer) {
    this.musicServiceTypes = [
      {
        image: 'https://i.ibb.co/1TcckCy/adamlar-by-omeravco-21-of-5720533596.jpg',
        name: 'Hangout Hall',
        city: 'Bornova',
        description: 'Performance stage in Bornova where various musicians and artists perform concerts',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.6162871463175!2d27.190653211616603!3d38.45033117284142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963752ab63703%3A0xbd1315c27300630a!2sHangout%20Performance%20Hall!5e0!3m2!1str!2str!4v1716235069251!5m2!1str!2str',
      },
      {
        image: 'https://i.ibb.co/5FYQ36V/D8y-Kz-N-W4-Acn-Joh.jpg',
        name: 'Havagazi Fabrikasi',
        city: 'Alsancak',
        description: 'The historical gas factory is a place where you can attend various concerts and events with your friends and family.',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.0543187717876!2d27.14921691161615!3d38.44021427343283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd869bc746411%3A0x2b1f98f8964be000!2zVGFyaWhpIEhhdmFnYXrEsSBGYWJyaWthc8SxIEvDvGx0w7xyIE1lcmtlemk!5e0!3m2!1str!2str!4v1716289551914!5m2!1str!2str',
      },

      {
        image: 'https://i.ibb.co/0GzTYPg/Ekran-Al-nt-s.png',
        name: 'Carnival Venue',
        city: 'Karsiyaka',
        description: 'Various musician concerts at Karşıyaka Hilltown shopping center',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.339316003576!2d27.07236191161772!3d38.47981162111782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdb1dd56b18fb%3A0xbfc30349d870efc9!2sCarnival%20Veneu!5e0!3m2!1str!2str!4v1716238500492!5m2!1str!2str',
      },
      {
        image: 'https://i.ibb.co/dcrw1q5/163-645-trip-eskisehir-1024x683.jpg',
        name: '6:45 Pub Kordon',
        city: 'Kordon',
        description: 'A pub where you can spend time with your friends, located in the heart of Izmirs heart, Kordon.',
        iframe:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.1348168170957!2d27.139736911616122!3d38.438354823541445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd96b8873ab3d%3A0x2169483027c5c104!2s6%3A45%20Pub%20KORDON!5e0!3m2!1str!2str!4v1716238354837!5m2!1str!2str',
      },
    ];
    this.originalMusicServiceTypes = [...this.musicServiceTypes];
    this.sanitizeIframeUrls();
  }

  sanitizeIframeUrls() {
    this.musicServiceTypes = this.musicServiceTypes.map(service => ({
      ...service,
      iframe: this.sanitizer.bypassSecurityTrustResourceUrl(service.iframe as string)
    }));
    this.originalMusicServiceTypes = [...this.musicServiceTypes];
  }

  filterEvents() {
    this.musicServiceTypes = [...this.originalMusicServiceTypes];
  
    if (this.selectedEventCategory) {
      this.musicServiceTypes = this.musicServiceTypes.filter(
        (type) => type.name === this.selectedEventCategory
      );
    }
  
    if (this.searchKeyword) {
      this.musicServiceTypes = this.musicServiceTypes.filter(
        (type) =>
          type.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
          type.city.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  
    if (this.selectedCity) {
      this.musicServiceTypes = this.musicServiceTypes.filter(
        (type) => type.city === this.selectedCity
      );
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
