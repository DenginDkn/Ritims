import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public musicServiceTypes: MusicServiceType[] = [
    {
      image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
      name: 'Live Performances',
      description: 'Find the perfect live performance for your event.',
    },
    {
      image: 'https://i.ibb.co/SP9vx2j/Musician2.jpg',
      name: 'Music Lessons',
      description: 'Hire the perfect music teacher with Ritims.',
    },
    {
      image: 'https://i.ibb.co/0yRx9YN/Musician3.jpg',
      name: 'Recording Sessions',
      description: 'Book the best recording sessions at Ritims now.',
    },
  ];

  public instrumentalists: instrumentalist[] = [
    {
      image: 'https://i.ibb.co/nwDnbQt/Guitarist.jpg',
      name: 'Guitarist',
      description: 'Guitar Guitar Guitar',
    },
    {
      image: 'https://i.ibb.co/nBzRKQs/Pianist.jpg',
      name: 'Pianists',
      description: 'Piano piano piano',
    },
    {
      image: 'https://i.ibb.co/PYc03m3/Violin.jpg',
      name: 'Violin',
      description: 'Violin violon',
    },
    {
      image: 'https://i.ibb.co/4p4r76c/Drum.jpg',
      name: 'Drummers',
      description: 'Drum drum drum',
    },
    {
      image: 'https://i.ibb.co/z6zJ5zs/Bass.jpg',
      name: 'Bassist',
      description: 'Bass bass bass',
    },
    {
      image: 'https://i.ibb.co/wBXDTtn/DJ.jpg',
      name: 'DJ',
      description: 'DJ DJ DJ DJ',
    },
    {
      image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
      name: 'Singer',
      description: 'Singer singer singer',
    },
    {
      image: 'https://i.ibb.co/nwDnbQt/Guitarist.jpg',
      name: 'Electro Guitarist',
      description: 'electro electro electro',
    },
    {
      image: 'https://i.ibb.co/RHcCtYy/Harp.jpg',
      name: 'Harpist',
      description: 'Harp harp harp',
    },
  ];
}

export interface instrumentalist {
  image: string;
  name: string;
  description: string;
}
export interface MusicServiceType {
  image: string;
  name: string;
  description: string;
}
