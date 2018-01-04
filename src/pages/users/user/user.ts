import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

// Use OnInit to grab the navParam before the template loads
export class UserPage implements OnInit {
  name: string

  constructor (private navParams: NavParams) {}

  ngOnInit(){
    this.name = this.navParams.get('userName')
  }
}
