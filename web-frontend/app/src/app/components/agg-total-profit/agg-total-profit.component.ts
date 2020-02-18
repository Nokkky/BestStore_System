import { Component, OnInit } from '@angular/core';
import { Aggregation } from 'src/app/models/Aggregation';
import { AggregationService } from '../../services/aggregation.service';
@Component({
  selector: 'app-agg-total-profit',
  templateUrl: './agg-total-profit.component.html',
  styleUrls: ['./agg-total-profit.component.css']
})
export class AggTotalProfitComponent implements OnInit {
  aggregations: Aggregation[];
  constructor(
    private aggregationService: AggregationService,
  ) { }

  ngOnInit() {
    this.aggregationService.getTotalProfit().subscribe(aggregations => {
      this.aggregations = aggregations
    })
  }

}
