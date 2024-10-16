import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrl: './status-modal.component.scss'
})
export class StatusModalComponent {
  @Input() type: 'success' | 'danger' | 'warning' = 'success';
  @Input() message = '';

  constructor(public  modal: NgbActiveModal, private modalService: NgbModal) {
  }
  dismissAllModals() {
    this.modalService.dismissAll();
  }
}
