import { Component, OnInit } from '@angular/core';
import { Aggregation } from 'src/app/models/Aggregation';
import { AggregationService } from '../../services/aggregation.service';
@Component({
  selector: 'app-agg-top-product-categories',
  templateUrl: './agg-top-product-categories.component.html',
  styleUrls: ['./agg-top-product-categories.component.css']
})
export class AggTopProductCategoriesComponent implements OnInit {
  aggregations: Aggregation[];
  constructor(
    private aggregationService: AggregationService,
  ) { }

  ngOnInit() {
    this.aggregationService.getTopProductCategories().subscribe(aggregations => {
      this.aggregations = aggregations
    })
  }

}
