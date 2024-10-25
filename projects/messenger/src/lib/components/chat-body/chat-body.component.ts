import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrl: './chat-body.component.scss',
})
export class ChatBodyComponent implements OnInit {
  @Input() selectedEmployee: any;
  searchTerm: any;

  searchChats: string = '';
  chatMessages: any[] = [];
  filteredChats: any[] = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.chatMessages = [
      { sender: 'User', text: 'Hello!', timestamp: new Date() },
      { sender: 'Friend', text: 'Hi there!', timestamp: new Date() },
      { sender: 'User', text: 'Hello!', timestamp: new Date() },
      { sender: 'Friend', text: 'Hi there!', timestamp: new Date() },
      { sender: 'User', text: 'Hello!', timestamp: new Date() },
      { sender: 'Friend', text: 'Hi there!', timestamp: new Date() },
      { sender: 'User', text: 'Hello!', timestamp: new Date() },
      { sender: 'Friend', text: 'Hi there!', timestamp: new Date() },
      { sender: 'User', text: 'Hello!', timestamp: new Date() },
      { sender: 'Friend', text: 'Hi there!', timestamp: new Date() },
    ];
    this.filteredChats = this.chatMessages;
  }

  filterFiles(): void {
    if (!this.searchChats) {
      this.filteredChats = this.chatMessages;
    } else {
      this.filteredChats = this.chatMessages.filter((file) =>
        file.text.toLowerCase().includes(this.searchChats.toLowerCase())
      );
    }
  }
}
