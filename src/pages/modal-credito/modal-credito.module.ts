import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCreditoPage } from './modal-credito';

@NgModule({
  declarations: [
    ModalCreditoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCreditoPage),
  ],
})
export class ModalCreditoPageModule {}
