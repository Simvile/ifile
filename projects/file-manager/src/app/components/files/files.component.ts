import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterOptions() {
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
