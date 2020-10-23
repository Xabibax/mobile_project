import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule {}
