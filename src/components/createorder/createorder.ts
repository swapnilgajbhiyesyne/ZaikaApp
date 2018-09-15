import { Component } from '@angular/core';

/**
 * Generated class for the CreateorderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'createorder',
  templateUrl: 'createorder.html'
})
export class CreateorderComponent {
orderlist=[
  {
    "name": "Soup",
    "price": 100
  },
  {
    "name": "Noodles",
    "price": 100
  },
  {
    "name": "Fried Rice",
    "price": 100
  },
  {
    "name": "Burger",
    "price": 100
  },
  {
    "name": "Momos",
    "price": 100
  }
]
  text: string;
  mushrooms:string="Half";
  constructor() {
    console.log('Hello CreateorderComponent Component');
    this.text = 'Hello World';
  }

  updateType(item)
  {
console.log(item)
var res=this.orderlist.filter(i=>i.name==item.name).indexOf(item.name)
this.orderlist[res].price=900;
  }

}
