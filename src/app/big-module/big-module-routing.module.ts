import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigOneComponent } from './big-one/big-one.component';

const routes: Routes = [
  {path: '', component: BigOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigModuleRoutingModule { }
