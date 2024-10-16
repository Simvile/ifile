import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalComponent } from '../components/add-modal/add-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AddModalService {

  constructor(private modalService: NgbModal) {}

  public openAdd(mode: 'add-file'|'add-folder'){
    if (mode === 'add-folder') {
      this.addFolder();
    } else {
      this.addFile();
    }
  }

  private addFile() {
    this.previewPayload("file");
  }
  private addFolder() {
    this.previewPayload("folder");
  }

  private previewPayload(payload?: any): void {
    const modalRef = this.modalService.open(AddModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = payload;
  }
}
