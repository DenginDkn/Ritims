import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HOME_CONSTANTS } from '../../constants';
import {Router } from '@angular/router';



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
      image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
      name: 'Live Performances',
      city:'Izmir',
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
      city: 'Izmir',
      description: 'Find the perfect guitarist for your events with Ritims.',
    },
    {
      image: 'https://i.ibb.co/nBzRKQs/Pianist.jpg',
      name: 'Pianist',
      city: 'Istanbul',
      description: 'Hire professional pianists with ease at Ritims.',
    },
    {
      image: 'https://i.ibb.co/WsxLR1h/Violin.jpg',
      name: 'Violinist',
      city: 'Istanbul',
      description: 'Book the perfect violin teacher with Ritims.',
    },
    {
      image: 'https://i.ibb.co/4p4r76c/Drum.jpg',
      name: 'Drummer',
      city: 'Eskisehir',
      description: 'Discover drummers feel the rhythm and make the beat.',
    },
    {
      image: 'https://i.ibb.co/z6zJ5zs/Bass.jpg',
      name: 'Bass Guitarist',
      city: 'Ankara',
      description: 'Find professional bassists for private lessons.',
    },
    {
      image: 'https://i.ibb.co/wBXDTtn/DJ.jpg',
      name: 'DJ',
      city: 'Antalya',
      description: 'Rock your event with a DJ!',
    },
    {
      image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
      name: 'Singer',
      city: 'Antalya',
      description: 'Hire professional singer with ease at Ritims.',
    },
    {
      image: 'https://i.ibb.co/nwDnbQt/Guitarist.jpg',
      name: 'Electro Guitarist',
      city: 'Aydın',
      description:
        'Find the perfect electro guitarist for your events with Ritims.',
    },
    {
      image: 'https://i.ibb.co/RHcCtYy/Harp.jpg',
      name: 'Harpist',
      city: 'Izmir',
      description: 'Discover harpist feel the rhythm and make the beat.',
    },
  ];
  constructor(private router: Router) {}
  search() {
    const searchText = (document.querySelector('input.form-control') as HTMLInputElement).value.toLowerCase();
  
    const musicServiceTypeMatch = this.musicServiceTypes.find(type => type.name.toLowerCase() === searchText);
    const instrumentalistMatch = this.instrumentalists.find(type => type.name.toLowerCase() === searchText);
  
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
}
