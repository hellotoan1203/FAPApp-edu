import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import {UsGirl} from '../../assets/data/us';
import {JavGirl} from '../../assets/data/jav';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  u: UsGirl=new UsGirl();
  j: JavGirl=new JavGirl();
  us: any[];
  jav: any[];
  items:any[] ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jav= this.j.getData();
    this.us=this.u.getData();
    this.items=this.jav.concat(this.us);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
