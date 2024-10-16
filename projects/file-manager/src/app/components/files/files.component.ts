import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { AddModalService } from '../../../../../shared-files/src/public-api';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  isDropdownOpen = false;

  constructor(private addfileservice:AddModalService) {}

  files = [
    {
      name: 'work-file.pdf',
      owner: 'Simvile Zimeme',
      lastModified: 'Oct 13, 2024',
      size: '536kb'
    },
    {
      name: 'another-file.pdf',
      owner: 'Simvile Zimeme',
      lastModified: 'Oct 13, 2024',
      size: '536kb'
    },
    {
      name: 'again another-file.pdf',
      owner: 'Simvile Zimeme',
      lastModified: 'Oct 13, 2024',
      size: '536kb'
    },
    {
      name: 'and another-file.pdf',
      owner: 'Simvile Zimeme',
      lastModified: 'Oct 13, 2024',
      size: '536kb'
    }
  ];

  selectedFile: string | null = null;

  onFileClick(fileName: string): void {
    this.selectedFile = fileName;
  }

  unSelectFile(){
    this.selectedFile = null;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterOptions() {
  }

  addfile(mode: 'add-file'|'add-folder') {
    this.addfileservice.openAdd(mode);
  }

  handleOptionClick(option: string) {
    const input = document.getElementById('dropdownInput') as HTMLInputElement;
    if (input) {
      input.value = option;
    }
    this.isDropdownOpen = false; // Close dropdown after selection
  }

  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isDropdownOpen = false; // Close dropdown if clicked outside
    }
  }
}
