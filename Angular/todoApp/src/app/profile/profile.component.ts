import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    dob!: string;

  constructor(private router: Router) { }

  redirectToProfile() {
    this.router.navigateByUrl('/profile');
  }
  
  ngOnInit() {
  }

}
