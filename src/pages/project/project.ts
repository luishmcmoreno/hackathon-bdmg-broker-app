import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
    this.today = new Date().toISOString();
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 100);
    this.maxDate = maxDate.toISOString();
  }

}
