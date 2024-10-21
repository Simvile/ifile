import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StatusModalService } from '../../services/status-modal.service';

@Component({
  selector: 'lib-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss'
})
export class AddModalComponent {
  @Input() statusMessage: string = '';
  @Input() fileName: string = '';
  @Input() data!: string;
  selectedVisibility: string = '';
  isDropdownOpen: boolean = false;

  constructor(private router: Router,
    private activeModal: NgbActiveModal,
    private messageAlert: StatusModalService) {}

  uploadItem(itemType: string) {
    this.messageAlert.showInfo(`Successfully save ${itemType}.`);
    this.closeModal();
    }
  
  onVisibilityChange(value: string) {
    this.selectedVisibility = value;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeModal(){
    this.activeModal.close();
  }


  changeLocation(locationData?: any) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
}
