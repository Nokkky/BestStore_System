import { Component, OnInit } from '@angular/core';
import { Aggregation } from 'src/app/models/Aggregation';
import { AggregationService } from '../../services/aggregation.service';
@Component({
  selector: 'app-agg-region-compare',
  templateUrl: './agg-region-compare.component.html',
  styleUrls: ['./agg-region-compare.component.css']
})
export class AggRegionCompareComponent implements OnInit {
  aggregations: Aggregation[];
  product_id: string;
  constructor(
    private aggregationService: AggregationService,
  ) { }

  ngOnInit() {
    this.aggregationService.getRegionsCompare().subscribe(aggregations => {
      this.aggregations = aggregations
    })
  }
}
