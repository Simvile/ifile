import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilesComponent } from './components/files/files.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: 'LogIn', component: LogInComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'home',
    component: HeaderComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
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
  {
    path: '404',
    component: NotFoundComponent,
    data: { breadcrumb: 'Not-Found' },
  },
  { path: '', redirectTo: '/LogIn', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
