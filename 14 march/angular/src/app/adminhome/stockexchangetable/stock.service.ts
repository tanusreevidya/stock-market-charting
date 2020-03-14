import { Injectable, Inject } from '@angular/core';
import { StockExchange } from '../../models/stockExchange'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  httpUrl = environment.host + `stock-exchange-service/stockExchange/`;
  stock = StockExchange;

  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }

  getAllStock(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }
  saveStock(stock:StockExchange):Observable<StockExchange>{
    console.log("hello");
    return this.ht.post(environment.host + `stock-exchange-service/stockExchange/`, stock);
  }

  deleteStock(id:number):Observable<StockExchange>{
    return this.ht.delete(environment.host + `stock-exchange-service/stockExchange/${id}`);
  }
  updateStockInfo(stk :StockExchange):Observable<StockExchange>{
    return this.ht.put(environment.host + `stock-exchange-service/stockExchange/` , stk);
  }
  getStockById(id :number):Observable<StockExchange>{
    return this.ht.get(environment.host + `stock-exchange-service/stockExchange/${id}`);
  }
}
