import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  openBrowser(){
    const browser = this.iab.create('http://www.google.com/search?q= '+this.selectedItem.name);
  }
}
