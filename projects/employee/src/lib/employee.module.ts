import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeConfigComponent } from './components/employee-config/employee-config.component';
import { FormsModule } from '@angular/forms';
import { SharedFilesModule } from '@ifile/shared-files';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeRouterModule } from './employee-router-module';
import { EmployeeGroupsComponent } from './components/employee-groups/employee-groups.component';

@NgModule({
  declarations: [
    EmployeeConfigComponent,
    EmployeeListComponent,
    AllEmployeesComponent,
    SideBarComponent,
    EmployeeGroupsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRouterModule,
    SharedFilesModule
  ],
  exports:[
    EmployeeConfigComponent
  ]
})
export class EmployeeModule { }
