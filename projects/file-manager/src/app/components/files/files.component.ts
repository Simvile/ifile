import { Component, OnInit } from '@angular/core';
import { AddModalService, Filter } from '@ifile/shared-files';

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
  filters: Filter[] = [];
  isAscending: any;
  isDateAscending: any;
  isSizeAscending: any;

  constructor(private addfileservice:AddModalService) {}


  ngOnInit(): void {
    this.filters = [
      { name: "Sort-by-Name", value: 1 },
      { name: "Sort-by-Date", value: 2 },
      { name: "Sort-by-Size", value: 3 },
      { name: "Sort-by-Owner", value: 4 }
    ];

  this.files = [
    {
      name: 'work-file.pdf',
      owner: 'Simvile Zimeme',
      lastModified: 'Oct 18, 2024',
      size: '53kb'
    },
    {
      name: 'another-file.pdf',
      owner: 'Tyson Jule',
      lastModified: 'Oct 15, 2024',
      size: '59kb'
    },
    {
      name: 'again another-file.pdf',
      owner: 'Simvile Zimeme',
      lastModified: 'Oct 13, 2024',
      size: '56kb'
    },
    {
      name: 'and another-file.pdf',
      owner: 'Andiswe Nomnyama',
      lastModified: 'Oct 20, 2024',
      size: '36kb'
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

filterByStatus(statusName: string): void {
  const status = this.filters.find(
    (status) => status.name === statusName
  );
  
  if (status) {
    switch (status.name) {
      case "Sort-by-Name":
        this.filteredFiles.sort((a, b) => this.isAscending 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name)
        );
        break;
        
      case "Sort-by-Date":
        this.filteredFiles.sort((a, b) => this.isAscending 
          ? new Date(a.lastModified).getDate() - new Date(b.lastModified).getDate()
          : new Date(b.lastModified).getDate() - new Date(a.lastModified).getDate()
        );
        break;
        
      case "Sort-by-Size":
        this.filteredFiles.sort((a, b) => this.isAscending 
          ? parseInt(a.size) - parseInt(b.size) 
          : parseInt(b.size) - parseInt(a.size)
        );
        break;
        
      case "Sort-by-Owner":
        this.filteredFiles.sort((a, b) => this.isAscending 
          ? a.owner.localeCompare(b.owner) 
          : b.owner.localeCompare(a.owner)
        );
        break;
        
      default:
        break;
    }
    
    this.isAscending = !this.isAscending;
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
    this.isDropdownOpen = false;
  }

  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }

}
