import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerConfigComponent } from './components/messenger-config/messenger-config.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { FormsModule } from '@angular/forms';
import { SharedFilesModule } from '@ifile/shared-files';



@NgModule({
  declarations: [MessengerConfigComponent,
    ChatListComponent,
    ChatBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedFilesModule
  ],
  exports:[
    MessengerConfigComponent
  ]
})
export class MessengerModule { }
