import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  opcion1:number = 0;
  opcion2:boolean = true ;

  opcion3 = "";

  fruits = [
    {name: 'apple', color: 'red'},
    {name: 'banana', color: 'yellow'},
    {name: 'orange', color: 'orange'},
    {name: 'strawberry', color: 'red'},
  ]
}
