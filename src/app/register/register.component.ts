import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router:Router ,private RegistrerU: RegisterService){}

  User = {
    Name: "",
    Email: "",
    Password: "",
    Type: 1,    
  }

  RegistrerUser = () => {

    this.RegistrerU.Register(this.User).subscribe(
      (res) => {
        alert("User registred");

        this.router.navigate(['login']);
      },

      (err) => {

        console.log(err);

      }
    )

  }

}
