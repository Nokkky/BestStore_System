import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { SalespersonService } from '../../services/salesperson.service';
import { RegionManagerService } from '../../services/region-manager.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isRegionManager: boolean;  
  products: Product[];
  job_title:string;
  constructor(
    private regionManagerService: RegionManagerService,
    private salespersonService: SalespersonService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }
  ngOnInit() {
    this.salespersonService.getProducts().subscribe(products => {
      this.products = products
    })
    this.job_title = window.localStorage.getItem('job_title');
    console.log(this.job_title);
    if (this.job_title == 'region_manager') {
      this.isRegionManager = true;
    }
  }
  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      this.regionManagerService.deleteProduct(id).subscribe();
      this.flashMessage.show('Product removed', {
        cssClass: 'alert-success', timeout: 1500
      });
      location.reload();
    }
  }
  onUpdateClick(id) {
    window.sessionStorage.setItem('product_id', id);
    this.router.navigate(['/product/update']);
  }
}
