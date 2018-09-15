import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemlistComponent} from '../../components/itemlist/itemlist'
import {CreateorderComponent} from '../../components/createorder/createorder'
import {OrdersgraphComponent} from '../../components/ordersgraph/ordersgraph'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }
  showlist()
  {
   // alert("cionic serve")
    this.navCtrl.push(ItemlistComponent)
  }

  createOrder()
  {
    this.navCtrl.push(CreateorderComponent)

  }

  showGraph()
  {
    this.navCtrl.push(OrdersgraphComponent);
  }
}
