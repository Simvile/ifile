import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  changeDirection(direction: string){
    this.router.navigate([direction], {relativeTo: this.route, skipLocationChange: true})
        .then(() => {
        });
  }
}
