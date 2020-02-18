import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { Product } from 'src/app/models/Product';
import { SalespersonService } from '../../services/salesperson.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
  providers: [DatePipe]
})
export class AddTransactionComponent implements OnInit {
  products: Product[];
  transaction: Transaction = {
    order_id: '',
    customer_id: '',
    order_date: '',
    product_id: '',
    quantity: 0,
    salesperson_id: '',
    store_id: ''
  }
  nowdate = new Date();
  constructor(
    private salespersonService: SalespersonService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.transaction.store_id = window.localStorage.getItem('store_id');
    this.transaction.salesperson_id = window.localStorage.getItem('salesperson_id');
    this.transaction.order_date = this.datePipe.transform(this.nowdate, 'yyyy-MM-dd HH:mm ZZZZ');
  }
  onSubmit({ value, valid }: { value: Transaction, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.salespersonService.getProduct(this.transaction.product_id).subscribe(products => {
        this.products = products;
        if (this.transaction.quantity > this.products[0]["amount"]) {
          this.flashMessage.show('Insufficient inventory, purchase failure, current inventory:' + this.products[0]["amount"], {
            cssClass: 'alert-danger', timeout: 5000
          });
        } else {
          this.salespersonService.addTransaction(this.transaction).subscribe();
          this.flashMessage.show('New transaction added', {
            cssClass: 'alert-success', timeout: 1500
          });
        }
      })
    }
  }


}
