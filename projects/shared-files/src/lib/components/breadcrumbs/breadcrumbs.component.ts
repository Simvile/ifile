import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Breadcrumb } from '../../models/breadcrumb-model.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.getBreadcrumbs().subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
      console.log('Current Breadcrumbs:', this.breadcrumbs);
    });
  }
  
}
