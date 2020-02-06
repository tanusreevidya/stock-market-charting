import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
 
  addipo : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addipo = this.formBuilder.group({
      companyname:['',Validators.required],
      stockexchange:['',Validators.required],
      ppshare:['',Validators.required],
      shares:['',Validators.required],
      datetime:['',Validators.required],
      remarks:['',Validators.required]
    });
  }
  addIPO(){
    console.log(this.addipo.value);
  }

}
