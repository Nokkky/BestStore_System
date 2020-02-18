import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/Store';
import { RegionManagerService } from '../../services/region-manager.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  stores: Store[];
  constructor(
    private regionManagerService: RegionManagerService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.regionManagerService.getStores().subscribe(stores => {
      this.stores = stores
    })
  }
  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      this.regionManagerService.deleteStore(id).subscribe();
      this.flashMessage.show('Post removed', {
        cssClass: 'alert-success', timeout: 1500
      });
      location.reload();
    }
  }
  onUpdateClick(id) {
    window.sessionStorage.setItem('store_id', id);
    this.router.navigate(['/store/update/']);
  }
}
