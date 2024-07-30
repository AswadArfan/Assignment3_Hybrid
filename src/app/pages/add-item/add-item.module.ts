import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddItemPage } from './add-item.page';
import { NgModule } from '@angular/core';
import { AddItemPageRoutingModule } from './add-item-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddItemPageRoutingModule
  ],
  declarations: [AddItemPage]
})
export class AddItemPageModule {}
