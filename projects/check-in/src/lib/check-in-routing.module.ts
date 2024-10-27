import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInConfigComponent } from './components/check-in-config/check-in-config.component';

export const routes: Routes = [
{
  path: '',
  component: CheckInConfigComponent,
  data: { breadcrumb: '' },
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInRoutingModule {}
