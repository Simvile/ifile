import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeConfigComponent } from './components/employee-config/employee-config.component';
import { EmployeeGroupsComponent } from './components/employee-groups/employee-groups.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeConfigComponent,
    data: { breadcrumb: 'Employees' },
    children: [
      {
        path: 'employee-list',
        component: EmployeeListComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'employee-groups',
        component: EmployeeGroupsComponent,
        data: { breadcrumb: 'Groups' },
      },
      { path: '', redirectTo: 'employee-list', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRouterModule {}
