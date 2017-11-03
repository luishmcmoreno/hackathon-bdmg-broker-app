import { ModalCreditoPage } from '../modal-credito/modal-credito';
import { ModalBdmgPage } from './../modal-bdmg/modal-bdmg';
import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';

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
  public showCemigFile: boolean;

  public startDate: string;
  public endDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController, private toastCtrl: ToastController,
    private modalController: ModalController) {
  }

  ionViewDidLoad() {
    this.project = this.navParams.get('project');


    this.today = new Date().toISOString();
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 100);
    this.maxDate = maxDate.toISOString();

    if (this.project.status) {
      this.startDate = '15/06/1994';
      this.endDate = '15/06/1994';
    }
  }

  uploadFile() {
    this.showPdf = true;
  }

  uploadCemigFile() {
    this.showCemigFile = true;
  }

  submit() {

    const loader = this.loadingCtrl.create({
      content: 'Enviando ao banco...',
      spinner: 'bubbles'
    });
    loader.present();
    if (!this.project.status) {
      setTimeout(() => {
        loader.dismiss();
        const modal = this.modalController.create(ModalBdmgPage);
        modal.present();
        modal.onWillDismiss(data => {
          this.navCtrl.setRoot('ProjectsPage', {status: true});
        });
      }, 1000);
    } else {
      setTimeout(() => {
        loader.dismiss();
        const modal = this.modalController.create(ModalCreditoPage);
        modal.present();
        modal.onWillDismiss(data => {
          this.navCtrl.setRoot('ProjectsPage');
        });
      }, 1000);
    }





  }
}
