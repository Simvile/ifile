import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilesComponent } from './components/files/files.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'files', component: FilesComponent, data: { breadcrumb: 'Files' } },
  { path: '404', component: NotFoundComponent, data: { breadcrumb: 'Not-Found' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
