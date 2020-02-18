import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import { StoreComponent } from './components/store/store.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddSalespersonComponent } from './components/add-salesperson/add-salesperson.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UpdateSalespersonComponent } from './components/update-salesperson/update-salesperson.component';
import { UpdateStoreComponent } from './components/update-store/update-store.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { AggTotalSalesComponent } from './components/agg-total-sales/agg-total-sales.component';
import { AggTotalProfitComponent } from './components/agg-total-profit/agg-total-profit.component';
import { AggTopProductCategoriesComponent } from './components/agg-top-product-categories/agg-top-product-categories.component';
import { AggTopBusinessComponent } from './components/agg-top-business/agg-top-business.component';
import { AggRegionCompareComponent } from './components/agg-region-compare/agg-region-compare.component';
import { BrowserHomeComponent } from './components/browser/browser-home/browser-home.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'browser', component: BrowserHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/add', component: AddCustomerComponent },
  { path: 'customer/update', component: UpdateCustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/update', component: UpdateProductComponent },

  { path: 'salesperson', component: SalespersonComponent },
  { path: 'salesperson/add', component: AddSalespersonComponent },
  { path: 'salesperson/update', component: UpdateSalespersonComponent },

  { path: 'store', component: StoreComponent },
  { path: 'store/add', component: AddStoreComponent },
  { path: 'store/update', component: UpdateStoreComponent },

  { path: 'transaction', component: TransactionComponent },
  { path: 'transaction/add', component: AddTransactionComponent },

  { path: 'inventory', component: InventoryComponent },
  { path: 'inventory/add', component: AddInventoryComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/agg-1', component: AggTotalSalesComponent },
  { path: 'dashboard/agg-2', component: AggTotalProfitComponent },
  { path: 'dashboard/agg-3', component: AggTopProductCategoriesComponent },
  { path: 'dashboard/agg-4', component: AggTopBusinessComponent },
  { path: 'dashboard/agg-5', component: AggRegionCompareComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
