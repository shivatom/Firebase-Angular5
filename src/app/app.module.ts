import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
/* Firebase */
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: ProductsComponent},
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shoping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuardService,AdminAuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent , canActivate:[AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent , canActivate:[AuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent  , canActivate:[AuthGuardService]},
      { path: 'admin/products/new', component: ProductFormComponent  , canActivate:[AuthGuardService]},
      { path: 'admin/products/new/:id', component: ProductFormComponent  , canActivate:[AuthGuardService]},
      { path: 'admin/orders', component: AdminOrdersComponent , canActivate:[AuthGuardService] }
    ]),
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuardService ,UserService ,CategoryService, ProductService , AdminAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
