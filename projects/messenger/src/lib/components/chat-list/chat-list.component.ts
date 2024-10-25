import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'lib-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent implements OnInit {
  @Output() selectedEmployee = new EventEmitter<any>();
  employeeSelected: any;
  defaultProfile: string = "https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";
  employeeSearch: string = '';
  employees: any[] = [];
  filteredEmployees: any[] = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employees = [
      {
        name: 'work-file.pdf',
        owner: 'Simvile Zimeme',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 18, 2024',
        size: '53kb',
      },
      {
        name: 'another-file.pdf',
        owner: 'Tyson Jule',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 15, 2024',
        size: '59kb',
      },
      {
        name: 'again another-file.pdf',
        owner: 'Simvile Zimeme',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 13, 2024',
        size: '56kb',
      },
      {
        name: 'and another-file.pdf',
        owner: 'Andiswe Nomnyama',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 20, 2024',
        size: '36kb',
      },
      {
        name: 'work-file.pdf',
        owner: 'Simvile Zimeme',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 18, 2024',
        size: '53kb',
      },
      {
        name: 'another-file.pdf',
        owner: 'Tyson Jule',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 15, 2024',
        size: '59kb',
      },
      {
        name: 'again another-file.pdf',
        owner: 'Simvile Zimeme',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 13, 2024',
        size: '56kb',
      },
      {
        name: 'and another-file.pdf',
        owner: 'Andiswe Nomnyama',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 20, 2024',
        size: '36kb',
      },
      {
        name: 'work-file.pdf',
        owner: 'Simvile Zimeme',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 18, 2024',
        size: '53kb',
      },
      {
        name: 'another-file.pdf',
        owner: 'Tyson Jule',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 15, 2024',
        size: '59kb',
      },
      {
        name: 'again another-file.pdf',
        owner: 'Simvile Zimeme',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 13, 2024',
        size: '56kb',
      },
      {
        name: 'and another-file.pdf',
        owner: 'Andiswe Nomnyama',
        email: 'zSimvile@gmail.com',
        lastModified: 'Oct 20, 2024',
        size: '36kb',
      },
    ];
    this.filteredEmployees = this.employees;
  }

  onEmployeeSelected(employee: any) {
    this.selectedEmployee.emit(employee);
    this.employeeSelected = employee;
  }

  filterEmployees(): void {
    if (!this.employeeSearch) {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(
        (file) =>
          file.name.toLowerCase().includes(this.employeeSearch.toLowerCase()) ||
          file.owner
            .toLowerCase()
            .includes(this.employeeSearch.toLowerCase()) ||
          file.lastModified
            .toLowerCase()
            .includes(this.employeeSearch.toLowerCase())
      );
    }
  }
}
