import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  @Component({
    templateUrl: './login.component.html',
  })
  email!: string;
  password!: string;

  login() {
    // Add your login logic here
    console.log('Logging in...');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  constructor() { }

  ngOnInit() {
  }
}
