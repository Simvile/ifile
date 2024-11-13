import { Component } from '@angular/core';

@Component({
  selector: 'app-check-in-config',
  templateUrl: './check-in-config.component.html',
  styleUrls: ['./check-in-config.component.scss']
})
export class CheckInConfigComponent {
  checkInDetails = [
    {
      date: 'November 03, 2024',
      fullName: 'Simvile Zimeme',
      address: '8th Avenue, Kensington, Cape Town, 7405',
      checkInTime: '08:00',
      lunchTimeTaken: '1 Hour',
      checkOutTime: '17:30'
    },
    {
      date: 'November 04, 2024',
      fullName: 'Simvile Zimeme',
      address: '8th Avenue, Kensington, Cape Town, 7405',
      checkInTime: '08:07',
      lunchTimeTaken: '30 Minutes',
      checkOutTime: '16:30'
    },
    {
      date: 'November 05, 2024',
      fullName: 'Simvile Zimeme',
      address: '8th Avenue, Kensington, Cape Town, 7405',
      checkInTime: '08:15',
      lunchTimeTaken: '45 Minutes',
      checkOutTime: '17:00'
    },
    {
      date: 'November 06, 2024',
      fullName: 'Simvile Zimeme',
      address: '8th Avenue, Kensington, Cape Town, 7405',
      checkInTime: '08:10',
      lunchTimeTaken: '1 Hour',
      checkOutTime: '17:20'
    },
    {
      date: 'November 07, 2024',
      fullName: 'Simvile Zimeme',
      address: '8th Avenue, Kensington, Cape Town, 7405',
      checkInTime: '08:05',
      lunchTimeTaken: '30 Minutes',
      checkOutTime: '16:45'
    }
  ];
}
