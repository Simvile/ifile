import { Component } from '@angular/core';
import { AddModalService } from '@ifile/shared-files';

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
