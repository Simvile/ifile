import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'file-manager';
  selectedPage: 'Home' | 'Employees' | 'Messenger' | 'Documents' = 'Home';
  profilePic: any;
  defaultProfile: string =
    'https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg';

    setPage(page: 'Home' | 'Employees' | 'Messenger' | 'Documents') {
      this.selectedPage = page;
    }
}
