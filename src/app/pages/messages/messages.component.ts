import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  username = 'username';
  message = '';
  messages: { username: string; message: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('73b91722453e60e5e5d3', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: { username: string; message: string }) => {
      console.log('New message:', data);
      this.messages.push(data);
    });
  }

  submit(event: Event): void {
    event.preventDefault();
    this.http.post('http://localhost:5188/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(() => {
      this.message = '';
    }, error => {
      console.error('Error:', error);
    });
  }
}
