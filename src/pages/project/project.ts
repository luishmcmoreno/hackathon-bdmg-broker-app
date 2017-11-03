import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

  private today: string;
  private maxDate: string;
  public showPdf: boolean;
  public project: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.project = this.navParams.get('project');


    this.today = new Date().toISOString();
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 100);
    this.maxDate = maxDate.toISOString();
  }

  uploadFile() {
    this.showPdf = true;
  }


  submit() {
    const loader = this.loadingCtrl.create({
      content: 'Enviando ao banco...',
      spinner: 'bubbles'
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'O projeto foi submetido para análise do BDMG. Obrigado',
        duration: 3500,
        closeButtonText: 'Ok'
      }).present();
      this.navCtrl.setRoot('VisitsPage');
    }, 1000);

  }
}
