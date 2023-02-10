import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:3000/users'

  constructor(private router: Router, private http: HttpClient) { }

  Register = (user: object) => {
    
    return this.http.post<any>(this.url, user);

  }

}
