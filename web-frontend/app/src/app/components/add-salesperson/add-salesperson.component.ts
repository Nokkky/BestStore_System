import { Component, OnInit } from '@angular/core';
import { Salesperson } from 'src/app/models/Salesperson';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreManagerService } from '../../services/store-manager.service';

@Component({
  selector: 'app-add-salesperson',
  templateUrl: './add-salesperson.component.html',
  styleUrls: ['./add-salesperson.component.css']
})
export class AddSalespersonComponent implements OnInit {
  isStoreManager: boolean;
  isRegionManager: boolean;
  job_title: string;
  salesperson: Salesperson = {
    salesperson_id: '',
    name: '',
    address: '',
    email: '',
    job_title: '',
    store_id: '',
    salary: '',
    password: ''

  }
  constructor(
    private flashMessage: FlashMessagesService,
    private storeManagerService: StoreManagerService
  ) { }

  ngOnInit() {
    this.salesperson.store_id = window.localStorage.getItem('store_id');
    this.job_title = window.localStorage.getItem('job_title');
    if (this.job_title == "region_manager") {
      this.isStoreManager = false;
      this.isRegionManager = true;
    } else if (this.job_title == "store_manager") {
      this.isStoreManager = true;
      this.isRegionManager = false;
    }
  }
  onSubmit({ value, valid }: { value: Salesperson, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.salesperson.store_id = window.localStorage.getItem('store_id');
      this.storeManagerService.addSalesperson(this.salesperson).subscribe();
      this.storeManagerService.increaseSalesperson_num(this.salesperson.store_id).subscribe();
      this.flashMessage.show('New salesperson added', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
