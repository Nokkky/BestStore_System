import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegionManagerService } from '../../services/region-manager.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    product_id: '',
    product_name: '',
    amount: 0,
    cost: 0,
    kind: '',
    price: 0,
  }
  constructor(
    private flashMessage: FlashMessagesService,
    private regionManagerService: RegionManagerService
  ) { }

  ngOnInit() {  }
  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.regionManagerService.addProduct(this.product).subscribe();
      this.flashMessage.show('New product added', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
