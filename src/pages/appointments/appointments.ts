import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {


  public list: any[] = [
    {name: 'Restaurante Farroupilha', street: 'Av Abraão Caram, 1271', date: '22/10 - 12:00 as 16:00'},
    {name: 'Hotel Ouro Minas', street: 'Av Cristiano Machado, 4001', date: '23/10 - 13:00 as 16:00'},
    {name: 'Padaria Esquinão', street: 'Av Guarapari, 2457', date: '27/10 - 09:00 as 12:00'},
    {name: 'Expominas', street: 'Av. Amazonas, 6200', date: '01/11 - 12:00 as 18:00'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentsPage');
  }

}
