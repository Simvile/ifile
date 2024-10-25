import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-employee-config',
  templateUrl: './employee-config.component.html',
  styleUrl: './employee-config.component.scss',
})
export class EmployeeConfigComponent implements OnInit {
  selectedemployee: any | null = null;
  employeeSearch: string = '';
  employees: any[] = [];
  filteredEmployees: any[] = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }

  deletefile(arg0: string) {
    throw new Error('Method not implemented.');
  }

  onEmployeeSelected(employee: any) {
    this.selectedemployee = employee;
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
