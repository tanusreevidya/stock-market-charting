import { Injectable } from '@angular/core';
import { StockExchange } from '../../models/stockExchange'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  httpUrl = ' http://localhost:3000/Stock';
  stock = StockExchange;

  constructor(private httpClient: HttpClient) { }

  getAllStock(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }
  saveStock(stock:StockExchange):Observable<StockExchange>{
    return this.httpClient.post<StockExchange>(this.httpUrl, stock);
  }

  deleteStock(id:number):Observable<StockExchange>{
    return this.httpClient.delete<StockExchange>(this.httpUrl + id);
  }
  updateStockInfo(stk :StockExchange):Observable<StockExchange>{
    return this.httpClient.put<StockExchange>(this.httpUrl + stk.id , stk);
  }
  getStockById(id :number):Observable<StockExchange>{
    return this.httpClient.get<StockExchange>(this.httpUrl + id);
  }
}
