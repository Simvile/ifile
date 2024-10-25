import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddModalService } from '@ifile/shared-files';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedFolder: any = true;

  constructor(private addfileservice: AddModalService, private router: Router) {}

  addfile(mode: 'add-file' | 'add-folder') {
    this.addfileservice.openAdd(mode);
  }

  onFolderSelection() {
    if (this.selectedFolder) {
      this.router.navigate(['home', 'files'])
        .then(() => {
          console.log('Navigated to the selected folder files');
        });
    }
  }
  
}
