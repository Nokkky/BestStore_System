import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/login/login.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddSalespersonComponent } from './components/add-salesperson/add-salesperson.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UpdateSalespersonComponent } from './components/update-salesperson/update-salesperson.component';
import { UpdateStoreComponent } from './components/update-store/update-store.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AggTotalSalesComponent } from './components/agg-total-sales/agg-total-sales.component';
import { AggTotalProfitComponent } from './components/agg-total-profit/agg-total-profit.component';
import { AggTopProductCategoriesComponent } from './components/agg-top-product-categories/agg-top-product-categories.component';
import { AggTopBusinessComponent } from './components/agg-top-business/agg-top-business.component';
import { AggRegionCompareComponent } from './components/agg-region-compare/agg-region-compare.component';
import { BrowserHomeComponent } from './components/browser/browser-home/browser-home.component';
import { AuthInterceptor } from './AuthInterceptor';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    TransactionComponent,
    ProductComponent,
    SalespersonComponent,
    StoreComponent,
    LoginComponent,
    AddCustomerComponent,
    AddStoreComponent,
    AddProductComponent,
    AddSalespersonComponent,
    DashboardComponent,
    SidebarComponent,
    InventoryComponent,
    AddInventoryComponent,
    AddTransactionComponent,
    WelcomeComponent,
    UpdateSalespersonComponent,
    UpdateStoreComponent,
    UpdateCustomerComponent,
    UpdateProductComponent,
    AggTotalSalesComponent,
    AggTotalProfitComponent,
    AggTopProductCategoriesComponent,
    AggTopBusinessComponent,
    AggRegionCompareComponent,
    BrowserHomeComponent,
  ],
  imports: [
    FlashMessagesModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FlashMessagesService,LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
