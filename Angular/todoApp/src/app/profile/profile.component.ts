import { Component } from '@angular/core';
interface Iprofile{
  firstname: string;
  lastname:string;
  mobile: string;
  email:string;
  dob: string;
  
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  allusers:any=localStorage.getItem("user");
  users=JSON.parse(this.allusers)
  firstname: string=this.users.firstname;
  lastname: string=this.users.lastname;
  mobile:string=this.users.mobile;
  email:string=this.users.email;
  dob:string=this.users.dob;
}