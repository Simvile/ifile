import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModalComponent, BreadcrumbsComponent } from '../public-api';
import { RouterModule } from '@angular/router';
import { StatusModalComponent } from './components/status-modal/status-modal.component';

@NgModule({
  declarations: [BreadcrumbsComponent, AddModalComponent, StatusModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    BreadcrumbsComponent,
    AddModalComponent,
    StatusModalComponent
  ]
})
export class SharedFilesModule { }

