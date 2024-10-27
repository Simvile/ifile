import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeGroupModel } from '../../models/EmployeeGroup';
import { Filter } from '@ifile/shared-files';

@Component({
  selector: 'lib-employee-groups',
  templateUrl: './employee-groups.component.html',
  styleUrl: './employee-groups.component.scss'
})
export class EmployeeGroupsComponent {
  @Output() employee = new EventEmitter();
  filters: Filter[] = [];
  selectedemployee: any | null = null;
  employeeSearch: string = '';
  employeeGroups: EmployeeGroupModel[] = [];
  filteredEmployees: any[] = [];

  ngOnInit(): void {
    this.fetchEmployees();
  }

  deletefile(arg0: string) {
    throw new Error('Method not implemented.');
  }

  onEmployeeSelected(employee: any) {
    this.selectedemployee = employee;
    this.employee.emit(this.selectedemployee);
  }

  fetchEmployees() {    
    this.employeeGroups = [
      {
        id: '1',
        name: 'iworld elite',
        department: 'Management',
        function: 'Oversees every important decision',
        createdOn: new Date('2024-12-31'),
        lead: 'Alice Johnson',
        teamSize: 5,
        budget: 500000,
        deadline: new Date('2024-12-31'),
      },
      {
        id: '2',
        name: 'itel development',
        department: 'IT',
        function: 'Software development team. Currently developing itel.',
        createdOn: new Date('2024-10-15'),
        lead: 'Bob Smith',
        teamSize: 10,
        budget: 300000,
        deadline: new Date('2024-10-24'),
      },
      {
        id: '3',
        name: 'marketing squad',
        department: 'Marketing',
        function: 'Responsible for all marketing strategies and campaigns',
        createdOn: new Date('2024-10-22'),
        lead: 'Catherine Lee',
        teamSize: 8,
        budget: 250000,
        deadline: new Date('2024-10-25'),
      },
      {
        id: '4',
        name: 'customer support team',
        department: 'Customer Service',
        function: 'Handles all customer inquiries and support tickets',
        createdOn: new Date('2024-10-10'),
        lead: 'David Kim',
        teamSize: 15,
        budget: 150000,
        deadline: new Date('2024-10-31'),
      },
      {
        id: '5',
        name: 'finance group',
        department: 'Finance',
        function: 'Manages all financial operations and reporting',
        createdOn: new Date('2024-10-12'),
        lead: 'Eva Martinez',
        teamSize: 6,
        budget: 200000,
        deadline: new Date('2024-09-31'),
      },
      {
        id: '6',
        name: 'product design team',
        department: 'Product',
        function: 'Focuses on product design and user experience',
        createdOn: new Date('2024-10-05'),
        lead: 'Franklin Reed',
        teamSize: 7,
        budget: 180000,
        deadline: new Date('2024-11-15'),
      },
      {
        id: '7',
        name: 'data analytics unit',
        department: 'Data Science',
        function: 'Analyzes data to drive business decisions',
        createdOn: new Date('2024-10-20'),
        lead: 'Grace Wilson',
        teamSize: 4,
        budget: 120000,
        deadline: new Date('2024-12-01'),
      },
      {
        id: '8',
        name: 'HR management team',
        department: 'Human Resources',
        function: 'Handles recruitment, training, and employee relations',
        createdOn: new Date('2024-10-01'),
        lead: 'Henry Taylor',
        teamSize: 5,
        budget: 220000,
        deadline: new Date('2024-11-30'),
      },
      {
        id: '9',
        name: 'sales team',
        department: 'Sales',
        function: 'Drives revenue through direct sales strategies',
        createdOn: new Date('2024-10-14'),
        lead: 'Isabella Brown',
        teamSize: 12,
        budget: 300000,
        deadline: new Date('2024-12-15'),
      },
      {
        id: '10',
        name: 'research and development',
        department: 'R&D',
        function: 'Innovates and develops new products',
        createdOn: new Date('2024-10-08'),
        lead: 'Jack White',
        teamSize: 9,
        budget: 400000,
        deadline: new Date('2025-01-10'),
      },
      {
        id: '11',
        name: 'legal compliance team',
        department: 'Legal',
        function: 'Ensures compliance with laws and regulations',
        createdOn: new Date('2024-10-18'),
        lead: 'Katherine Green',
        teamSize: 3,
        budget: 100000,
        deadline: new Date('2025-01-05'),
      },
      {
        id: '12',
        name: 'network operations',
        department: 'IT',
        function: 'Maintains and manages network infrastructure',
        createdOn: new Date('2024-10-11'),
        lead: 'Liam Clark',
        teamSize: 8,
        budget: 250000,
        deadline: new Date('2024-11-20'),
      },
      {
        id: '13',
        name: 'corporate communications',
        department: 'Public Relations',
        function: 'Manages external communications and brand image',
        createdOn: new Date('2024-10-25'),
        lead: 'Mia Young',
        teamSize: 6,
        budget: 200000,
        deadline: new Date('2024-12-10'),
      },
      {
        id: '14',
        name: 'supply chain management',
        department: 'Operations',
        function: 'Oversees supply chain logistics and efficiency',
        createdOn: new Date('2024-10-13'),
        lead: 'Noah Lewis',
        teamSize: 10,
        budget: 320000,
        deadline: new Date('2025-02-01'),
      },
      {
        id: '15',
        name: 'content creation team',
        department: 'Marketing',
        function: 'Develops and manages content for marketing channels',
        createdOn: new Date('2024-10-09'),
        lead: 'Olivia Hall',
        teamSize: 7,
        budget: 175000,
        deadline: new Date('2024-11-25'),
      },
    ];
    this.filters = [
      {
        name: 'Active',
        value: 0,
      },
      {
        name: 'InActive',
        value: 1,
      },
    ];
    this.filteredEmployees = this.employeeGroups;
  }

  filterByStatus(statusName: string): void {
    const status = this.filters.find(
      (status) => status.name === statusName
    );
  }

  filterEmployees(): void {
    if (!this.employeeSearch) {
      this.filteredEmployees = this.employeeGroups;
    } else {
      this.filteredEmployees = this.employeeGroups.filter(
        (file) =>
          file.name?.toLowerCase().includes(this.employeeSearch.toLowerCase()) ||
          file.department?.toLowerCase()
            .includes(this.employeeSearch.toLowerCase()) ||
          file.function?.toLowerCase()
            .includes(this.employeeSearch.toLowerCase())
      );
    }
  }
}
