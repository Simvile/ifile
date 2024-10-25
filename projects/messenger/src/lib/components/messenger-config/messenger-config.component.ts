import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-messenger-config',
  templateUrl: './messenger-config.component.html',
  styleUrl: './messenger-config.component.scss'
})
export class MessengerConfigComponent {
employeeSelected: any;


updateEmployeeSelected(employee: any) {
  this.employeeSelected = employee;
  }
}
