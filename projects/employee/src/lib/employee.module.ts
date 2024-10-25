import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeConfigComponent } from './components/employee-config/employee-config.component';
import { FormsModule } from '@angular/forms';
import { SharedFilesModule } from '@ifile/shared-files';



@NgModule({
  declarations: [EmployeeConfigComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedFilesModule
  ],
  exports:[
    EmployeeConfigComponent
  ]
})
export class EmployeeModule { }
