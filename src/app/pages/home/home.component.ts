import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HOME_CONSTANTS } from '../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constants = HOME_CONSTANTS;
  public musicServiceTypes: MusicServiceType[] = [
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
  ];

  public MUSIC_TYPES: { name: string; link: string }[] = [
    { name: 'Pop', link: '/musicians' },
    { name: 'Classical', link: '/musicians' },
    { name: 'Electronic', link: '/musicians' },
    { name: 'Punk', link: '/musicians' },
    { name: 'Rock', link: '/musicians' },
    { name: 'Jazz', link: '/musicians' },
    { name: 'Blues', link: '/musicians' },
    { name: 'Metal', link: '/musicians' },
    { name: 'Disco', link: '/musicians' },
    { name: 'World Music', link: '/musicians' },
    { name: 'Folk', link: '/musicians' },
    { name: 'Country', link: '/musicians' },
    { name: 'Latin', link: '/musicians' },
    { name: 'Funk', link: '/musicians' },
    { name: 'Hip-Hop / Rap', link: '/musicians' },
    // Add more music types as needed
  ];
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

  constructor(private router: Router) {}

  search() {
    const searchText = (document.querySelector('input.form-control') as HTMLInputElement).value.toLowerCase();
  
    const socialKeywords = ['event', 'concert', 'activity', 'performance', 'show','konser','etkinlik'];
    const musicianKeywords = ['muzisyen', 'muzik', 'musician'];
  
    if (socialKeywords.some(keyword => searchText.includes(keyword))) {
      this.router.navigate(['/events']);
      return;
    }

    if (musicianKeywords.some(keyword => searchText.includes(keyword))) {
      this.router.navigate(['/musicians']);
      return;
    }
  
    const musicServiceTypeMatch = this.musicServiceTypes.find(type => type.name.toLowerCase().includes(searchText));
    const instrumentalistMatch = this.instrumentalists.find(type => type.name.toLowerCase().includes(searchText));
  
    if (musicServiceTypeMatch) {
      this.router.navigate(['/events']);
    } else if (instrumentalistMatch) {
      this.router.navigate(['/musicians']);
    } else {
      // Handle case when no match is found
      alert('No match found for your search.');
    }
  }
}

export interface instrumentalist {
  image: string;
  name: string;
  city: string;
  description: string;
}
export interface MusicServiceType {
  image: string;
  name: string;
  city: string;
  description: string;
  iframe: string;
}
