import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparesector',
  templateUrl: './comparesector.component.html',
  styleUrls: ['./comparesector.component.css']
})
export class ComparesectorComponent implements OnInit {

  compareSectorForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.compareSectorForm = this.formBuilder.group({
      sector:['',Validators.required],
      stockExchange:['',Validators.required],
      companyname:['',Validators.required],
      datefrom:['',Validators.required],
      dateto:['',Validators.required]
    });
  }
  compareTheSector(){
    console.log(this.compareSectorForm.value);
  }

}
