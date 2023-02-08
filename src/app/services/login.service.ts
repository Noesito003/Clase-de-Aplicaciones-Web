import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:3000/users/login";

  constructor(private router: Router, private http: HttpClient) { }

  login = (user: object) => {
    return this.http.post<any>(this.url, user);
  }
  


  logout = () => {
    localStorage.clear();

    this.router.navigate(['/inicio']);
  }

  

  UserType = () => {
    
    if(this.isLogued()){

      switch(localStorage.getItem('Type')){

        case "1": return 1

        case "2": return 2

        default: return false

      }

    }else{
      return false
    }


  }

  isLogued = () => !!localStorage.getItem('Type');
}
