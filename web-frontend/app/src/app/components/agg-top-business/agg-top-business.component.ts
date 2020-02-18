import { Component, OnInit } from '@angular/core';
import { Aggregation } from 'src/app/models/Aggregation';
import { AggregationService } from '../../services/aggregation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-agg-top-business',
  templateUrl: './agg-top-business.component.html',
  styleUrls: ['./agg-top-business.component.css']
})
export class AggTopBusinessComponent implements OnInit {
  aggregations: Aggregation[];
  aggregation: Aggregation = {
    product_name:'',
    region_name:'',
    category:'',
    sum_quantity:'',
    product_id:''
  }
  constructor(
    private aggregationService: AggregationService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() { }
  onSubmit({ value, valid }: { value: Aggregation, valid: boolean }) {
    console.log('ok');
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.aggregationService.getTopBusinesses(this.aggregation.product_id).subscribe(aggregations=>{
        this.aggregations=aggregations
      });
    }
  }
}
