import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Pusher from 'pusher-js';
import { AuthService } from '../authservice'; // Make sure to import the AuthService
import { EmailService } from '../../email.service'; // Import EmailService

interface Message {
  username: string;
  message: string;
  timestamp: string; // Add timestamp field
}

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
  messages: Message[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService, // Inject AuthService
    private emailService: EmailService // Inject EmailService
  ) {}

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('73b91722453e60e5e5d3', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: Message) => {
      console.log('New message:', data);
      this.messages.push(data);
    });

    // Fetch user details
    if (this.authService.isLoggedInUser()) {
      const userEmail = this.emailService.getUserEmail();
      this.http.get<any>(`http://localhost:5188/api/Users/GetByEmail/${userEmail}`)
        .subscribe(
          (response: any) => {
            this.username = response.name; // Set the username to the user's name
          },
          (error) => {
            console.error('Error fetching user profile:', error);
          }
        );

      // If you need to fetch from musicians as well
      this.http.get<any>(`http://localhost:5188/api/Musicians/GetByEmail/${userEmail}`)
        .subscribe(
          (response: any) => {
            this.username = response.name; // Set the username to the user's name
          },
          (error) => {
            console.error('Error fetching musician profile:', error);
          }
        );
    }
  }

  submit(event: Event): void {
    event.preventDefault();
    const newMessage: Message = {
      username: this.username,
      message: this.message,
      timestamp: new Date().toISOString() // Include the current timestamp
    };
    this.http.post('http://localhost:5188/api/messages', newMessage).subscribe(() => {
      this.message = '';
    }, error => {
      console.error('Error:', error);
    });
  }
}
