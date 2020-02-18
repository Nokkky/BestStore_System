import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/Store';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegionManagerService } from '../../services/region-manager.service';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
  store_id: string;
  stores: Store[];
  constructor(
    private flashMessage: FlashMessagesService, private regionManagerService: RegionManagerService
  ) { }

  ngOnInit() {
    this.store_id = window.sessionStorage.getItem('store_id');
    this.regionManagerService.getStore(this.store_id).subscribe(stores => {
      this.stores = stores
    })
  }
  onSubmit(valid:boolean ) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      console.log(this.stores[0]);
      this.regionManagerService.updateStore(this.store_id, this.stores[0]).subscribe();
      this.flashMessage.show('Store updated', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
