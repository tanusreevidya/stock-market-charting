import { Injectable, Inject } from '@angular/core';
import { StockExchange } from '../../models/stockExchange'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  httpUrl = 'http://localhost:8080/stockExchange/';
  stock = StockExchange;

  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }

  getAllStock(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }
  saveStock(stock:StockExchange):Observable<StockExchange>{
    console.log("hello");
    return this.ht.post(`http://localhost:8080/stockExchange/`, stock);
  }

  deleteStock(id:number):Observable<StockExchange>{
    return this.ht.delete(`http://localhost:8080/stockExchange/${id}`);
  }
  updateStockInfo(stk :StockExchange):Observable<StockExchange>{
    return this.ht.put(`http://localhost:8080/stockExchange/` , stk);
  }
  getStockById(id :number):Observable<StockExchange>{
    return this.ht.get(`http://localhost:8080/stockExchange/${id}`);
  }
}
