import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Subject } from 'rxjs';
import { Stock } from '../models/document';
const socket = webSocket("ws://159.89.15.214:8080/");

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  dataRecieved: Subject<Stock> = new Subject();
  listLiveStock: {};

  constructor() { }

  sendData(isin: string) {
    // request to be sent when the websocket connects
    socket.next({ subscribe: isin });

    // the observable produces a value once the websocket has been opened
    socket.subscribe((updates: Stock) => this.dataRecieved.next(updates))
  }

  connect() {
    // create the websocket observable
    socket.subscribe();
  }

  disconnect() { }
}
