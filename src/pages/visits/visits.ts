import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visits',
  templateUrl: 'visits.html',
})
export class VisitsPage {

  public list: any[] = [
    {name: 'Clicar Engenharia', street: 'Av Portugal, 1023', date: '16/10 - 12:00 as 18:00'},
    {name: 'Academia Pratique Fitness', street: 'Av Antonio Carlos, 2175', date: '17/10 - 09:00 as 15:00'},
    {name: 'Restaurante Farroupilha', street: 'Av Abraão Caram, 1271', date: '22/10 - 12:00 as 16:00'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitsPage');
  }

}
