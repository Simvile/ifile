import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilesComponent } from './components/files/files.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { CheckInComponent } from './components/check-in/check-in.component';

export const routes: Routes = [
  { path: 'login', component: LogInComponent, data: { breadcrumb: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register' } },
  {
    path: 'home',
    component: HeaderComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        component: CheckInComponent,
        data: { breadcrumb: '' },
        children: [
          {
            path: '',
            loadChildren: () => import('@imanager/check-in').then(m => m.CheckInModule),
            runGuardsAndResolvers: 'always',
          }
        ]
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('@imanager/Employee').then(m => m.EmployeeModule),
            runGuardsAndResolvers: 'always',
          }
        ]
      },
      {
        path: 'messenger',
        component: MessengerComponent,
        data: { breadcrumb: 'Messenger' },
      },
      {
        path: 'folders',
        component: HomeComponent,
        data: { breadcrumb: 'Folders' },
      },
      {
        path: 'files',
        component: FilesComponent,
        data: { breadcrumb: 'Files' },
      },
    ],
  },
  { path: '404', component: NotFoundComponent, data: { breadcrumb: 'Not Found' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
