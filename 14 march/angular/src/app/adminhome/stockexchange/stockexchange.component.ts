import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/models/stockExchange';
import { StockService } from '../stockexchangetable/stock.service';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  stock :  StockExchange[];
  constructor(private router:Router, private stockService:StockService) { }

  ngOnInit() {
    this.stockService.getAllStock().subscribe(data => {
    this.stock = data;
    });
  }

  addStock(){
    this.router.navigate(['AddStock'])
  }
  deleteStock(stk:StockExchange){
    this.stockService.deleteStock(stk.id).subscribe();
    this.stock = this.stock.filter(u => stk != stk);
    this.router.navigate(['stockexchange']);
  }
  updateStock(stk : StockExchange){
    //localStorage.removeItem('stkId');
    localStorage.setItem('stkId', stk.id.toString());
    this.router.navigate(['updateStock']);
  }


}
