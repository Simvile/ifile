import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StatusModalService } from '../../services/status-modal.service';

@Component({
  selector: 'lib-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {

  @Input() data!: string;
Filename: any;


constructor(private router: Router,
  private activeModal: NgbActiveModal,
  private messageAlert: StatusModalService) {}

  deleteItem() {
    this.messageAlert.showInfo(`you have successfully deleted ${this.data}`);
  }

closeModal(){
  this.activeModal.close();
}
}
