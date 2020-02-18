import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SalespersonService } from '../../services/salesperson.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer_id: string;
  customers: Customer[];
  customer_kind: string;
  constructor(
    private flashMessage: FlashMessagesService,
    private salespersonService: SalespersonService
  ) { }

  ngOnInit() {
    this.customer_id = window.sessionStorage.getItem('customer_id');
    this.customer_kind = window.sessionStorage.getItem('customer_kind');
    if (this.customer_kind == 'home') {
      this.salespersonService.getCustomerHome(this.customer_id).subscribe(customers => {
        this.customers = customers
      })
    }
    else if (this.customer_kind == 'business') {
      this.salespersonService.getCustomerBusiness(this.customer_id).subscribe(customers => {
        this.customers = customers
      })
    }
  }
  onSubmit(valid:boolean ) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      console.log(this.customers[0]);
      this.salespersonService.updateCustomer(this.customer_id, this.customers[0]).subscribe();
      this.flashMessage.show('Customer updated', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
