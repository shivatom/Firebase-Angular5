import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$;
  constructor(private _category:CategoryService) { 
    this.category$= _category.getAllCategory();
  }

  ngOnInit() {
   
  }




}
