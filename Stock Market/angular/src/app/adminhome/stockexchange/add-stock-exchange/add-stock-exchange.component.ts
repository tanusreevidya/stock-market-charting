import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from '../../stockexchangetable/stock.service';

@Component({
  selector: 'app-add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  addStockForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router, private stockService: StockService) { }

  ngOnInit() {
    this.addStockForm = this.formBuilder.group({
      id:['',Validators.required],
      exchangeName:['',Validators.required],
      contractAddress:['',Validators.required],
      brief:['',Validators.required],
      remarks:['',Validators.required]
    });
  }

  addTheStock(){
    this.stockService.saveStock(this.addStockForm.value).subscribe(data =>{
      console.log('stock entered successfully');
    });
  }

}
