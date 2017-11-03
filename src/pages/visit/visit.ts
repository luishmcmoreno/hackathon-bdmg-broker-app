import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private actionSheetCtrl: ActionSheetController) {
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
    this.navCtrl.push('ProjectPage', {project: this.visit});
  }

  ionViewDidLoad() {
    this.visit = this.navParams.get('visit');
    console.log('ionViewDidLoad VisitPage');
  }

}
