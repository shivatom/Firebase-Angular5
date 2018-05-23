import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product$;
  constructor(private prodService:ProductService) { 
    this.product$=prodService.getAll();
  }

  ngOnInit() {
  }

}
