import { Component } from '@angular/core';

@Component({
  selector: 'lib-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  selectedemployee: any;

  updateEmployee(employee: any) {
    this.selectedemployee = employee;
  }
}
