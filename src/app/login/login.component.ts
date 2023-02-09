import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router ,private ServiceLogin: LoginService){ }

  User = {
    Email: "",
    Password: "",
  }

  Login = () => {
    this.ServiceLogin.login(this.User).subscribe(
      (res) => {
        alert("Welcome: " + res.UserF.Name);
        localStorage.setItem("Type", res.UserF.Type);
        this.router.navigate(['/inicio']);
      },

      (err) => {
        console.log(err);
      }
      )
  }

}
