import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInRoutingModule } from './check-in-routing.module';
import { FormsModule } from '@angular/forms';
import { CheckInConfigComponent } from './components/check-in-config/check-in-config.component';



@NgModule({
  declarations: [
    CheckInConfigComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckInRoutingModule
  ],
  exports:[CheckInConfigComponent]
})
export class CheckInModule { }
