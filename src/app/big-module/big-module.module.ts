import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigModuleRoutingModule } from './big-module-routing.module';
import { BigOneComponent } from './big-one/big-one.component';
import {
  MatDatepickerModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSliderModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BigModuleRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatSliderModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule
  ],
  declarations: [BigOneComponent]
})
export class BigModuleModule { }
