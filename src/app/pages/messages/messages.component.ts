import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class MessagesComponent implements AfterViewInit {
  username = 'username';
  message = '';
  messages: Message[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngAfterViewInit(): void {
    Pusher.logToConsole = true;
    const pusher = new Pusher('73b91722453e60e5e5d3', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: Message) => {
      console.log('New message:', data);
      this.messages.push(data);
    });

    if (this.authService.isLoggedInUser()) {
      const userEmail = this.emailService.getUserEmail();
      
      this.fetchMessages(); // Mesajları sayfa yüklendiğinde al

      this.http.get<any>(`http://localhost:5188/api/Users/GetByEmail/${userEmail}`)
        .subscribe(
          (response: any) => {
            this.username = response.name;
          },
          (error) => {
            console.error('Error fetching user profile:', error);
          }
        );
    }
  }

  submit(event: Event): void {
    event.preventDefault();
    const newMessage: Message = {
      username: this.username,
      message: this.message,
      timestamp: new Date().toISOString()
    };
    
    this.http.post('http://localhost:5188/api/chat/messages', newMessage).subscribe(() => {
      this.message = '';
    
      // Yeni mesaj gönderildikten sonra mevcut mesajları yenile
      this.fetchMessages();
    }, error => {
      console.error('Error saving message:', error);
    });
  }
  
  
  
  fetchMessages(): void {
    this.http.get<Message[]>('http://localhost:5188/api/chat/messages') // Doğru URL'yi kullan
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        },
        (error) => {
          console.error('Error fetching messages:', error);
        }
      );
  }  
  
}
