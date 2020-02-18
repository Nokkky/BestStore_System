import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { RegionManagerService } from '../../services/region-manager.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories:Inventory[];
  constructor(
    private regionManagerService: RegionManagerService,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
    this.regionManagerService.getInventories().subscribe(inventories => {
      this.inventories = inventories
    })
  }
  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      this.regionManagerService.deleteInventory(id).subscribe();
      this.flashMessage.show('Inventory removed', {
        cssClass: 'alert-success', timeout: 1500
      });
      location.reload();
    }
  }
}
