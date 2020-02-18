import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { BrowserService } from '../../../services/browser.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-browser-home',
  templateUrl: './browser-home.component.html',
  styleUrls: ['./browser-home.component.css']
})
export class BrowserHomeComponent implements OnInit {
  products: Product[];
  product: Product= {
    product_name:''
  }

  constructor(
    private browserService: BrowserService,
    private flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    console.log('ok');
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.browserService.searchProduct(this.product.product_name).subscribe(products=>{
        this.products=products
      });
    }
  }
  onClick_1() {
    this.browserService.getLaptops_1().subscribe(products => {
      this.products = products
    })
  }
  onClick_2() {
    this.browserService.getLaptops_2().subscribe(products => {
      this.products = products
    })
  }
  onClick_3() {
    this.browserService.getLaptops_3().subscribe(products => {
      this.products = products
    })
  }

  onClick_4() {
    this.browserService.getPc_1().subscribe(products => {
      this.products = products
    })
  }
  onClick_5() {
    this.browserService.getPc_2().subscribe(products => {
      this.products = products
    })
  }
  onClick_6() {
    this.browserService.getPc_3().subscribe(products => {
      this.products = products
    })
  }

  onClick_7() {
    this.browserService.getTablet_1().subscribe(products => {
      this.products = products
    })
  }
  onClick_8() {
    this.browserService.getTablet_2().subscribe(products => {
      this.products = products
    })
  }
  onClick_9() {
    this.browserService.getTablet_3().subscribe(products => {
      this.products = products
    })
  }

  onClick_10() {
    this.browserService.getTwoInOne_1().subscribe(products => {
      this.products = products
    })
  }
  onClick_11() {
    this.browserService.getTwoInOne_2().subscribe(products => {
      this.products = products
    })
  }
  onClick_12() {
    this.browserService.getTwoInOne_3().subscribe(products => {
      this.products = products
    })
  }

}
