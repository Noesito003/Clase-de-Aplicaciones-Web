import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

interface size  {
  name: String;
  quantity: Number,
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})




export class ProductoComponent {


  constructor(private router: Router ,private producto: ProductoService) {




  }




  category:String[] = [];

  sizes:size[] = [];

  product = {
    name: '',
    description: '',
    price: 0,
    image: '',
    category: this.category,
    size: this.sizes,
  }


  showCategory = () => {
    console.log(this.category);
  }


  addCategory = (category: String) => {
    this.product.category.push(category)
  }



  showSize = () => {
    console.log(this.sizes);
  }

  addSize = () => {
    this.sizes.push({name: '', quantity: 0})
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
