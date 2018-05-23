import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(produts){
    return this.db.list('/products').push(produts);
  }

  update(produts , pid){
    return this.db.object('/products/'+pid).update(produts);
  }

  delete(pid){
    return this.db.object('/products/'+pid).remove();
  }

  getAll(){
    return this.db.list('/products');
  }
  get(pid){
    return this.db.object("/products/"+pid)
  }

}
