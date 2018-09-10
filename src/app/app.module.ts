import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist/productlist.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartitemComponent } from './cart/cartitem/cartitem.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
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
  MatMenuModule
} from '@angular/material';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'material'},
  { path: 'material', component: MaterialComponent },
  { path: 'shop', component: ShopComponent },
 {path: 'bigComponent', loadChildren: './big-module/big-module.module#BigModuleModule'}

];

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CartComponent,
    CartitemComponent,
    ShopComponent,
    MaterialComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
