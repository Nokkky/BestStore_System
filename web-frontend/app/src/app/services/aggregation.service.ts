import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Salesperson } from 'src/app/models/Salesperson';
import { Observable } from 'rxjs';
import { Aggregation } from '../models/Aggregation';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AggregationService {
  aggregation: Observable<Aggregation[]>
  constructor(private http: HttpClient) { }
  getTotalSales() {
    let url = 'https://hmygrace-infsci2560-web-backend-1.glitch.me/aggregation/products_sales';
    return this.http.get<Aggregation[]>(url);

  }
  getTotalProfit() {
    let url = 'https://hmygrace-infsci2560-web-backend-1.glitch.me/aggregation/products_profit';
    return this.http.get<Aggregation[]>(url);
  }
  getTopProductCategories() {
    let url = 'https://hmygrace-infsci2560-web-backend-1.glitch.me/aggregation/top_product';
    return this.http.get<Aggregation[]>(url);
  }
  getRegionsCompare() {
    let url = 'https://hmygrace-infsci2560-web-backend-1.glitch.me/aggregation/region_sales';
    return this.http.get<Aggregation[]>(url);
  }
  getTopBusinesses(id) {
    let url = 'https://hmygrace-infsci2560-web-backend-1.glitch.me/aggregation/product_business/' + id;
    return this.http.get<Aggregation[]>(url);
  }
}
