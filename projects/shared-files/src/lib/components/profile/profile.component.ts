import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() employee: any;
  activeTab:'Overview'|'Contact'|'Organisation' = 'Overview';
  profilePic: any;
  defaultProfile: string = "https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

  viewContent(cityName: 'Overview'|'Contact'|'Organisation') {
    this.activeTab = cityName;
  }
}
