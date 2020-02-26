import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoServiceService } from '../ipo-service.service';
import { Ipos } from 'src/app/models/ipos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateipo',
  templateUrl: './updateipo.component.html',
  styleUrls: ['./updateipo.component.css']
})
export class UpdateipoComponent implements OnInit {
  updateipoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private ipoService: IpoServiceService, private router:Router) { }

  ngOnInit() {
    this.updateipoForm = this.formBuilder.group({
      id:[],
      companyName:['',Validators.required],
      stockExchange:['',Validators.required],
      pricePerShare:['',Validators.required],
      totalStocks:['',Validators.required],
      openDateTime:['',Validators.required],
      remarks:['',Validators.required]
    });
    const id = localStorage.getItem('ipoId');
        if(+id > 0){
    this.ipoService.getIpoById(+id).subscribe(com => {
           this.updateipoForm.patchValue(com);
    });
  }
  }
  updateIPO(ipo : Ipos){
    this.ipoService.updateIpoInfo(this.updateipoForm.value).subscribe(u => {
      this.router.navigate(['ipolist']);
    });
  }

}
