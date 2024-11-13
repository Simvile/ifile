import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrl: './chat-body.component.scss',
})
export class ChatBodyComponent implements OnInit {
  @Output() onReturn = new EventEmitter();
  @Output() onViewUserInfo = new EventEmitter<boolean>();
  @Input() selectedEmployee: any = null;
  @Input() mobileView: boolean = false;
  searchTerm: any;
  defaultProfile: string = "https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";
  searchChats: string = '';
  chatMessages: any[] = [];
  filteredChats: any[] = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }

  goBack() {
    this.onReturn.emit(null);
  }

  viewUser(){
    this.onViewUserInfo.emit(true);
  }

  fetchEmployees() {
    this.chatMessages = [
      { sender: 'User', text: "Hey Bob, just checking in on the new project.", timestamp: new Date('2024-10-26T09:15:00') },
      { sender: 'Friend', text: "Hi Alice! Yes, I’ve started the initial setup. We’re on track for the first milestone.", timestamp: new Date('2024-10-26T09:16:00') },
      { sender: 'User', text: "Great! Do you need any help with the setup?", timestamp: new Date('2024-10-26T09:17:00') },
      { sender: 'Friend', text: "I think I’ve got it covered, but I’ll let you know if I run into any issues. Thanks!", timestamp: new Date('2024-10-26T09:18:00') },
      { sender: 'User', text: "Perfect. Let’s plan a quick sync tomorrow to go over any updates.", timestamp: new Date('2024-10-26T09:19:00') },
      { sender: 'Friend', text: "Sounds good! What time works for you?", timestamp: new Date('2024-10-26T09:20:00') },
      { sender: 'User', text: "How about 10 AM?", timestamp: new Date('2024-10-26T09:21:00') },
      { sender: 'Friend', text: "10 AM works for me. See you then!", timestamp: new Date('2024-10-26T09:22:00') },
    ];

    this.chatMessages.push(
      { sender: 'User', text: "By the way, did you get a chance to look at the design mockups?", timestamp: new Date('2024-10-26T09:23:00') },
      { sender: 'Friend', text: "Yes, I reviewed them last night. They look great! We might need to tweak the color scheme slightly.", timestamp: new Date('2024-10-26T09:24:00') },
      { sender: 'User', text: "Noted! I’ll discuss the color adjustments with the design team.", timestamp: new Date('2024-10-26T09:25:00') },
      { sender: 'Friend', text: "Thanks, Alice. Just a minor change, but it’ll help with readability.", timestamp: new Date('2024-10-26T09:26:00') },
      { sender: 'User', text: "Absolutely. Anything else on your radar?", timestamp: new Date('2024-10-26T09:27:00') },
      { sender: 'Friend', text: "Not at the moment. Let’s focus on the setup and first milestone, and we can regroup after.", timestamp: new Date('2024-10-26T09:28:00') },
      { sender: 'User', text: "Makes sense. Thanks for the update, Bob.", timestamp: new Date('2024-10-26T09:29:00') },
      { sender: 'Friend', text: "No problem, Alice! Talk soon.", timestamp: new Date('2024-10-26T09:30:00') }
    );
    
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
