import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$;
  product={};
  id
  constructor(private _category:CategoryService ,private productServ:ProductService , private router:Router , private activeRoute: ActivatedRoute) { 
    this.category$= _category.getAllCategory();
    this.id=this.activeRoute.snapshot.params.id;
    if(this.id){
      productServ.get(this.id).take(1).subscribe(x=> this.product=x , err => console.log('Error', err));
    }
  }
  
  ngOnInit() {
  
  }

  createProduct(product){
    if(this.id)
      this.productServ.update(product ,this.id );
    else    
    this.productServ.create(product);
    
    this.router.navigate(['/admin/products']);
  }
  removeProduct(){
    if(!confirm("Are you sure want delete this product")) return;
      this.productServ.delete(this.id );
      this.router.navigate(['/admin/products']);
  }
}
