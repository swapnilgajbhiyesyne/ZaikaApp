import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder }   from '@angular/forms';
/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {
  form: FormGroup;
  firstName = new FormControl("", Validators.required);
  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder) {
    this.form = fb.group({
      "itemName": this.firstName,
      "price":["", Validators.required]
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form.value.firstName);
    console.log(JSON.stringify(this.form.value));

}
}
