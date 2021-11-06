import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Stock } from './models/document';
import { StocksService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stock$: Observable<Stock> = this.stockService.dataRecieved;

  searchBox = new FormControl("", [Validators.required, Validators.min(10)]);

  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.stockService.connect();
  }

  ngAfterContentInit() { }

  ngOnDestroy() {
    this.stockService.disconnect();
  }

  getStockQuotes() {
    if (this.searchBox.valid) return this.stockService.sendData(this.searchBox.value);
    alert('Enter a valid ISIN code to see live updates');
  }
}
