import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  title: string;
  message: string;
  constructor() {

  }

  ngOnInit() {
    this.title = 'Login to your Account';
  }
  check_login(username, password) {
    if (username.value === 'Mohsen' && password.value === 'Amir') {
      this.message = 'You have successfully logged in';
    } else {
      this.message = 'Username and/or Password is wrong';
    }

  }

}
