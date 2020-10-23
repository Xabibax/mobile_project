import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SessionsRoutingModule } from './sessions-routing.module'
import { SessionsComponent } from './sessions.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SessionsComponent }]),
    SessionsRoutingModule,
  ],
  declarations: [SessionsComponent]
})
export class SessionsModule {}
