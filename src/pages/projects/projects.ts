import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  public list: any[] = [
    {name: 'Clicar Engenharia', street: 'Av Portugal, 1023', date: '16/10 - 12:00 as 18:00'},
    {name: 'Restaurante Farroupilha', street: 'Av Portugal, 4075', date: '17/10 - 12:00 as 18:00'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    const status = this.navParams.get('status');
    if(status) {
      console.log('status');
      setTimeout(() => {
        this.toastCtrl.create({
          message: 'O crédito do cliente Clicar Engenharia foi aprovado. Você já pode executar o serviço. Após execução favor anexar o protocolo da CEMIG no projeto para liberação do crédito.',
          closeButtonText: 'Ok',
          showCloseButton: true
        }).present();
        this.list[0].status = status;
      }, 3000);
    }
  }

}
