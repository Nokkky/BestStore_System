import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { RegionManagerService } from '../../services/region-manager.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css'],
  providers: [DatePipe]
})
export class AddInventoryComponent implements OnInit {
  inventory: Inventory = {
    order_id: '',
    order_date: '',
    product_id: '',
    quantity: 0
  }
  nowdate = new Date();
  constructor(
    private regionManagerService: RegionManagerService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.inventory.order_date = this.datePipe.transform(this.nowdate, 'yyyy-MM-dd HH:mm ZZZZ');
  }
  onSubmit({ value, valid }: { value: Inventory, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.regionManagerService.addInventory(this.inventory).subscribe();
      this.flashMessage.show('New inventory added', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
