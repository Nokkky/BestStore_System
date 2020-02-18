import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SalespersonService } from '../../services/salesperson.service';
import { RegionManagerService } from '../../services/region-manager.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product_id: string;
  products: Product[];
  constructor(
    private flashMessage: FlashMessagesService,
    private salespersonService: SalespersonService,
    private regionManagerService: RegionManagerService

  ) { }

  ngOnInit() {
    this.product_id = window.sessionStorage.getItem('product_id');
    this.salespersonService.getProduct(this.product_id).subscribe(products => {
      this.products = products
    })
  }
  
  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      console.log(this.products[0]);
      this.regionManagerService.updateProduct(this.product_id, this.products[0]).subscribe();
      this.flashMessage.show('Product updated', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
