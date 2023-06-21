import { Component, OnInit } from '@angular/core';
interface Iprofile{
  firstname: string;
  lastname:string;
  mobile: string;
  email:string;
  username: string;
  password: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  profile:Iprofile={
    firstname:"",
    lastname:'',
    mobile: '',
    email:'',
    username:"",
    password: ""
   
    }

  handleSignup() {
    if (this.profile.username && this.profile.email && this.profile.password) {
      localStorage.setItem("user",JSON.stringify(this.profile))
      // Perform signup logic here
      console.log('Signup successful');
    } else {
      console.log('Please enter all required fields');
    }

  
  }
}
