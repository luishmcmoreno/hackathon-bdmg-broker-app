import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
