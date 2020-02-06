import { Component, OnInit } from '@angular/core';
import { StockExchange } from 'src/app/models/stockExchange';
import { StockService } from './stock.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchangetable',
  templateUrl: './stockexchangetable.component.html',
  styleUrls: ['./stockexchangetable.component.css']
})
export class StockexchangetableComponent implements OnInit {

  updateStockForm : FormGroup;
  constructor(private stockService: StockService, private formBuilder:FormBuilder, private router: Router) { }
   stock :  StockExchange[];
  ngOnInit() {
    this.updateStockForm = this.formBuilder.group({
      id:['',Validators.required],
      stockname:['',Validators.required],
      remarks:['',Validators.required]
    });
  

  const id = localStorage.getItem('comId');
  if(+id > 0){
  this.stockService.getStockById(+id).subscribe(com => {
         this.updateStockForm.patchValue(com);
  });
}

}
updateTheStock(stk : StockExchange){
  this.stockService.updateStockInfo(this.updateStockForm.value).subscribe(u => {
    this.router.navigate(['stockexchange']);
  });
}
}
