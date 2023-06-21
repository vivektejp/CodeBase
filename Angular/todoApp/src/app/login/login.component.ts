import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
   res:any=localStorage.getItem("user")
  username: string | undefined;
  password: string | undefined;
  constructor(private router: Router) { }
  loggingin() {
    
    if (this.username==JSON.parse(this.res).username && this.password==JSON.parse(this.res).password) {
     
      // Perform authentication logic here
      console.log('Login successful',);
      this.router.navigate(['profile'])
    } else {
      console.log('Please enter a username and password');
    }
  }
}