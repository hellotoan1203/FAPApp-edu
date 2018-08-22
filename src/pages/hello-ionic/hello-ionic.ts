import { Component } from '@angular/core';
import {UsGirl} from '../../assets/data/us';
import {JavGirl} from '../../assets/data/jav';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  u: UsGirl=new UsGirl();
  j: JavGirl=new JavGirl();
  us: any[];
  jav: any[];
  items:any[] ;
  constructor() {
    this.jav= this.j.getData();
    this.us=this.u.getData();
    this.items=this.jav.slice(0,3);
  }
}
