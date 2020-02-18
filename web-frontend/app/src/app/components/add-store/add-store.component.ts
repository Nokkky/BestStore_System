import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/Store';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegionManagerService } from '../../services/region-manager.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  store: Store = {
    address: '',
    store_id: '',
    manager: '',
    region_id: '',
    salespersons_num: 0
  }
  constructor(
    private flashMessage: FlashMessagesService,
    private regionManagerService: RegionManagerService
  ) { }

  ngOnInit() {}
  onSubmit({ value, valid }: { value: Store, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.store.salespersons_num = 0;
      this.regionManagerService.addStore(this.store).subscribe();
      this.flashMessage.show('New store added', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
