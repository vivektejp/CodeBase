import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  phone!: string;
  dob!: string;
  signup() {
    // Add your signup logic here
    console.log('Signing up...');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Phone:', this.phone);
    console.log('Date of Birth:', this.dob);
  }
  constructor() { }

  ngOnInit() {
  }

}
