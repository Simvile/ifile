import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../public-api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    BreadcrumbsComponent
  ]
})
export class SharedFilesModule { }

