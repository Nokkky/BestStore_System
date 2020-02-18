import { Component, OnInit } from '@angular/core';
import { Salesperson } from 'src/app/models/Salesperson';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreManagerService } from '../../services/store-manager.service';

@Component({
  selector: 'app-update-salesperson',
  templateUrl: './update-salesperson.component.html',
  styleUrls: ['./update-salesperson.component.css']
})
export class UpdateSalespersonComponent implements OnInit {
  salesperson_id: string;
  salespersons: Salesperson[];
  isStoreManager: boolean;
  isRegionManager: boolean;
  job_title: string;
  constructor(
    private flashMessage: FlashMessagesService, private storeManagerService: StoreManagerService
  ) { }

  ngOnInit() {

    this.salesperson_id = window.sessionStorage.getItem('salesperson_id');
    this.job_title = window.localStorage.getItem('job_title');
    if (this.job_title == "region_manager") {
      this.isStoreManager = false;
      this.isRegionManager = true;
    } else if (this.job_title == "store_manager") {
      this.isStoreManager = true;
      this.isRegionManager = false;
    }
    this.storeManagerService.getSalespersonWithPassword(this.salesperson_id).subscribe(salespersons => {
      this.salespersons = salespersons
      console.log(this.salespersons);
    })
  }
  onSubmit({ value, valid }: { value: Salesperson, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.storeManagerService.updateSalesperson(this.salesperson_id, this.salespersons[0]).subscribe();
      this.flashMessage.show('Salesperson updated', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
