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


  category:String[] = [];

  product = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category: this.category,
    size: [],
  }


  showCategory = () => {
    console.log(this.category);
  }


  addCategory = (category: String) => {
    this.product.category.push(category)
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
