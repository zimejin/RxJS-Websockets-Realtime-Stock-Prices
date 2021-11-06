import { Component, Input } from '@angular/core';
import { Stock } from 'src/app/models/document';


@Component({
  selector: 'app-stock-prices',
  templateUrl: './stock-prices.component.html',
  styleUrls: ['./stock-prices.component.scss']
})
export class StockPricesComponent {
  @Input() stock: Stock

  constructor() { }
}
