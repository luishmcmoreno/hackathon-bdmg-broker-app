import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  public appointment: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  public accept(): void {
    this._handleAction('O agendamento foi realizado com sucesso.');
  }

  public reject(): void {
    this._handleAction('O agendamento foi removido com sucesso.');

  }

  private _handleAction(text: string) {
    let loader = this.loadingCtrl.create({
      content: 'Aguarde...',
      spinner: 'bubbles'
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.pop()
        .then(() => {
          this.toastCtrl.create({
            message: text,
            duration: 2000,
            closeButtonText: 'Ok'
          }).present();
        });
    }, 1000);
  }

  ionViewDidLoad() {
    this.appointment = this.navParams.get('appointment');
    console.log(this.navParams.get('appointment'));
    console.log('ionViewDidLoad AppointmentPage');
  }

}
