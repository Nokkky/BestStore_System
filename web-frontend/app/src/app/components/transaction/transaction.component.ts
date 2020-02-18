import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { SalespersonService } from '../../services/salesperson.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions:Transaction[];
  constructor(
    private salespersonService: SalespersonService,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
    this.salespersonService.getTransactions().subscribe(transactions => {
      this.transactions = transactions
    })
  }
  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      this.salespersonService.deleteTransaction(id).subscribe();
      this.flashMessage.show('Transaction removed', {
        cssClass: 'alert-success', timeout: 1500
      });
      location.reload();
    }
  }
}
