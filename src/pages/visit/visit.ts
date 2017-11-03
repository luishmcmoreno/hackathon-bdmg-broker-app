import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the VisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html',
})
export class VisitPage {

  public showImages: boolean;
  public visit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }

  public addPictures(): void {
    this.actionSheetCtrl.create({
      title: 'O que deseja?',
      buttons: [
        {
          text: 'Usar a câmera',
          handler: () => {
            this.showImages = true;

          }
        },
        {
          text: 'Pegar da galeria',
          handler: () => {
            this.showImages = true;
          }
        },
        { text: 'Cancelar', role: 'cancel' }
      ]
      }).present();
  }

  public finish(): void {
    const loader = this.loadingCtrl.create({
      content: 'Finalizando visita...',
      spinner: 'bubbles'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'Visita finalizada com sucesso, insira os dados do projeto para que ele possa ser enviado a análise.',
        closeButtonText: 'Ok',
        showCloseButton: true,
        duration: 5000
      }).present();
      this.navCtrl.push('ProjectPage', {project: this.visit});
    }, 2000);

  }

  ionViewDidLoad() {
    this.visit = this.navParams.get('visit');
    console.log('ionViewDidLoad VisitPage');
  }

}
