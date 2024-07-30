import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorePage } from './store.page';
import { NgModule } from '@angular/core';
import { StorePageRoutingModule } from './store-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StorePageRoutingModule
  ],
  declarations: [StorePage]
})
export class StorePageModule {}
