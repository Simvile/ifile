import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalComponent } from '../components/add-modal/add-modal.component';
import { DeleteModalComponent } from '../../public-api';

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

  public openDelete(mode: 'delete-file'|'delete-folder'){
    if (mode === 'delete-folder') {
      this.deleteFolder();
    } else {
      this.deleteFile();
    }
  }

  private addFile() {
    this.previewPayload("file");
  }
  private addFolder() {
    this.previewPayload("folder");
  }

  private deleteFile(){
    this.deleteConfirmation("file");
  }

  private deleteFolder(){
    this.deleteConfirmation("folder");
  }

  private deleteConfirmation(data: string){
    const modalRef = this.modalService.open(DeleteModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = data;
  }

  private previewPayload(payload?: any): void {
    const modalRef = this.modalService.open(AddModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = payload;
  }
}
