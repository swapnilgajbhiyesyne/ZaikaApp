import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {AdditemPage} from '../../pages/additem/additem'
/**
 * Generated class for the ItemlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'itemlist',
  templateUrl: 'itemlist.html'
})
export class ItemlistComponent {
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello ItemlistComponent Component');
    this.text = 'Hello World';
  }

  presentModal() {
    const modal = this.modalCtrl.create(AdditemPage);
    modal.present();
  }

}
