import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:3000/clothe';

  constructor(private router: Router, private http: HttpClient) { }

  setProduct = (product: object) => {
    return this.http.post<any>(this.url, product);
  }

}
