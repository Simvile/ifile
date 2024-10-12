import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilesComponent } from './components/files/files.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'files', component: FilesComponent, data: { breadcrumb: 'Files' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
