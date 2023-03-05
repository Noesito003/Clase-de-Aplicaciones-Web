import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  constructor(private router: Router ,private producto: ProductoService) { }

  product = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category: [],
    size: [],
  }


  setProduct = () => {
    this.producto.setProduct(this.product).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }


    )
  }

}
