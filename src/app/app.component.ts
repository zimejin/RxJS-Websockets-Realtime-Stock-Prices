import { Component, OnInit } from '@angular/core';
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

  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.stockService.connect();
  }

  ngAfterContentInit() {
    this.stockService.sendData("DE000BASF111");
  }

  ngOnDestroy() {
    this.stockService.disconnect();
  }
}
