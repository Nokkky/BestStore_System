import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { SalespersonService } from '../../services/salesperson.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  constructor(
    private salespersonService: SalespersonService,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
    this.salespersonService.getCustomers().subscribe(customers => {
      this.customers = customers
    })
  }
  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      this.salespersonService.deleteCustomer(id).subscribe();
      this.flashMessage.show('Customer removed', {
        cssClass: 'alert-success', timeout: 1500
      });
      location.reload();
    }
  }
  onUpdateClick(id,kind) {
    window.sessionStorage.setItem('customer_id', id);
    window.sessionStorage.setItem('customer_kind', kind);
    this.router.navigate(['/customer/update']);
  }
}
