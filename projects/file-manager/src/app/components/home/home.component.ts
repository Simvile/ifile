import { Component } from '@angular/core';
import { AddModalService } from '../../../../../shared-files/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private addfileservice:AddModalService) {}

  addfile(mode: 'add-file'|'add-folder') {
    this.addfileservice.openAdd(mode);
  }
}
