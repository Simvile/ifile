import { Component, OnInit } from '@angular/core';
import { AddModalService } from '@ifile/shared-files';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  searchTerm: string = '';
  files: any[] = [];
  filteredFiles: any[] = [];
  isDropdownOpen = false;
  isLocked: boolean = true;

  constructor(private addfileservice:AddModalService) {}


  ngOnInit(): void {

  this.files = [
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

  this.filteredFiles = this.files;
}

filterFiles(): void {
  if (!this.searchTerm) {
    this.filteredFiles = this.files;
  } else {
    this.filteredFiles = this.files.filter(file =>
      file.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      file.owner.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      file.lastModified.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}


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

  deletefile(mode: 'delete-file'|'delete-folder') {
    this.addfileservice.openDelete(mode);
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
