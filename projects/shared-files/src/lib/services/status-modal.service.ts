import { Injectable } from '@angular/core';
import { StatusModalComponent } from '../components/status-modal/status-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class StatusModalService {

  constructor(private modalService: NgbModal) {
  }

  public showInfo(message: string): void {
    this.showMessage(message, 'success');
  }

  showError(message: string) {
    this.showMessage(message, 'danger');
  }

  showWarning(message: string) {
    this.showMessage(message, 'warning');
  }

  private showMessage(message: string, type: 'success' | 'danger' | 'warning' = 'success') {
    message = message.trim();
    if (!message.endsWith('.')) {
      message += '.';
    }

    const ref = this.modalService.open(StatusModalComponent, {
      backdrop: false,
      modalDialogClass: "info-dialog"
    });
    const instance: StatusModalComponent = ref.componentInstance;
    instance.message = message;
    instance.type = type;
  }
}
