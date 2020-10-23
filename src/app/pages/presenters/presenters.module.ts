import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PresentersRoutingModule } from './presenters-routing.module'
import { PresentersComponent } from './presenters.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PresentersComponent }]),
    PresentersRoutingModule,
  ],
  declarations: [PresentersComponent]
})
export class PresentersModule {}
