import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-messenger-config',
  templateUrl: './messenger-config.component.html',
  styleUrl: './messenger-config.component.scss',
})
export class MessengerConfigComponent implements OnInit {
  employeeSelected: any;
  isMobileView: boolean = false;
  chatSelected: boolean = false;
  isDisplayUserInfo: boolean = true;

  ngOnInit() {
    this.checkViewport();
  }

  goBack() {
    this.isDisplayUserInfo = false;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 500;
    if(this.isMobileView == true){
    this.isDisplayUserInfo = false;
    }
    else{
      this.isDisplayUserInfo = true;
    }
  }

  updateEmployeeSelected(employee: any) {
    this.employeeSelected = employee;
    this.chatSelected = !!employee;
  }

  updateDisplayUserInfo(response: boolean) {
    this.isDisplayUserInfo = response;
  }
}
