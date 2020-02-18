import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SalespersonService } from '../../services/salesperson.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  isHome: boolean;
  isBusiness: boolean;
  customer: Customer = {
    customer_id: '',
    address: '',
    kind: '',
    name: '',
    //Home
    marry_status: '',
    age: '',
    gender: '',
    income: '',
    //Business
    category: '',
    company_income: '',
  }
  constructor(
    private flashMessage: FlashMessagesService,
    private salespersonService: SalespersonService
  ) { }

  ngOnInit() { }
  onSubmit({ value, valid }: { value: Customer, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.salespersonService.addCustomer(this.customer).subscribe();
      this.flashMessage.show('New customer added', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
  changeKind() {
    if (this.customer.kind == 'business') {
      this.isBusiness = true;
      this.isHome = false;
    } else if
    (this.customer.kind == 'home') {
      this.isBusiness = false;
      this.isHome = true;
    }else if(this.customer.kind =='' ){
      this.isBusiness = false;
      this.isHome = false;
    }
  }
}
