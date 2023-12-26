import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HOME_CONSTANTS } from '../../constants';

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
      description: 'Find the perfect guitarist for your events with Ritims.',
    },
    {
      image: 'https://i.ibb.co/nBzRKQs/Pianist.jpg',
      name: 'Pianists',
      description: 'Hire professional pianists with ease at Ritims.',
    },
    {
      image: 'https://i.ibb.co/PYc03m3/Violin.jpg',
      name: 'Violinsts',
      description: 'Book the perfect violin teacher with Ritims.',
    },
    {
      image: 'https://i.ibb.co/4p4r76c/Drum.jpg',
      name: 'Drummers',
      description: 'Discover drummers feel the rhythm and make the beat.',
    },
    {
      image: 'https://i.ibb.co/z6zJ5zs/Bass.jpg',
      name: 'Bassist',
      description: 'Find professional bassists for private lessons.',
    },
    {
      image: 'https://i.ibb.co/wBXDTtn/DJ.jpg',
      name: 'DJ',
      description: 'Rock your event with a DJ!',
    },
    {
      image: 'https://i.ibb.co/0mzjJP9/musician.jpg',
      name: 'Singer',
      description: 'Hire professional singer with ease at Ritims.',
    },
    {
      image: 'https://i.ibb.co/nwDnbQt/Guitarist.jpg',
      name: 'Electro Guitarist',
      description:
        'Find the perfect electro guitarist for your events with Ritims.',
    },
    {
      image: 'https://i.ibb.co/RHcCtYy/Harp.jpg',
      name: 'Harpist',
      description: 'Discover harpist feel the rhythm and make the beat.',
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
