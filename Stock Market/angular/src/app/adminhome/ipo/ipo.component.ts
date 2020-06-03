import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoServiceService } from './ipo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
 
  addipoForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private ipoService:IpoServiceService , private router:Router) { }

  ngOnInit() {
    this.addipoForm = this.formBuilder.group({
      id:['',Validators.required],
      companyName:['',Validators.required],
      stockExchange:['',Validators.required],
      pricePerShare:['',Validators.required],
      totalStocks:['',Validators.required],
      openDateTime:['',Validators.required],
    //  remarks:['',Validators.required]
    });
  }
  addIPO(){
    this.ipoService.saveIpo(this.addipoForm.value).subscribe(data => {
      console.log('ipo insterted successfully');
      this.router.navigate(['ipolist']);
    });
  }

}
