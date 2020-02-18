import { Component, OnInit } from '@angular/core';
import { Salesperson } from 'src/app/models/Salesperson';
import { StoreManagerService } from '../../services/store-manager.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent implements OnInit {
  salespersons: Salesperson[];
  store_id: string;
  constructor(
    private storeManagerService: StoreManagerService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.storeManagerService.getSalespersons().subscribe(salespersons => {
      this.salespersons = salespersons
    })
  }
  onDeleteClick(id) {
    if (confirm('Are you sure?')) {
      this.storeManagerService.getSalespersonStoreId(id).subscribe(
        salespersons => {
          this.store_id = salespersons[0]['store_id'];
          this.storeManagerService.decreaseSalesperson_num(this.store_id).subscribe();
          this.storeManagerService.deleteSalesperson(id).subscribe();
        }
      );
      this.flashMessage.show('Salesperson removed', {
        cssClass: 'alert-success', timeout: 1500
      });
      // location.reload();
    }
  }
  onUpdateClick(id) {
    window.sessionStorage.setItem('salesperson_id', id);
    this.router.navigate(['/salesperson/update']);
  }
}
