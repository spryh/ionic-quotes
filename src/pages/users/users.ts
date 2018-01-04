import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})

export class UsersPage {
  constructor (private navCtrl: NavController) {}

  // Push the userpage on the page stack using a navcontroller
  // Pass the name in an object
  onLoadUser(name:string){
    this.navCtrl.push(UserPage, {userName: name})
  }
}
