import { Component, OnInit } from '@angular/core';
import { Aggregation } from 'src/app/models/Aggregation';
import { AggregationService } from '../../services/aggregation.service';
@Component({
  selector: 'app-agg-total-sales',
  templateUrl: './agg-total-sales.component.html',
  styleUrls: ['./agg-total-sales.component.css']
})
export class AggTotalSalesComponent implements OnInit {
  aggregations: Aggregation[];
  constructor(
    private aggregationService: AggregationService,
  ) { }

  ngOnInit() {
    this.aggregationService.getTotalSales().subscribe(aggregations => {
      this.aggregations = aggregations
    })
  }

}
