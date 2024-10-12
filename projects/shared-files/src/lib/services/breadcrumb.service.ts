import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb-model.service';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  getBreadcrumbs(): Observable<Breadcrumb[]> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadcrumbs(this.route.root))
    );
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    // Get the current route's URL segments
    const routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
  
    // Check if there's a valid route URL
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }
  
    // Get the current route's breadcrumb label
    const label = route.snapshot.data['breadcrumb'];
    if (label) {
      // Add the current route as a breadcrumb before processing children
      breadcrumbs.push({ label, url });
    }
  
    // Process children
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
  
    for (const child of children) {
      // Recursively build breadcrumbs for children
      this.buildBreadcrumbs(child, url, breadcrumbs);
    }
  
    return breadcrumbs; // Return at the end of the function
  }
  
  
}
