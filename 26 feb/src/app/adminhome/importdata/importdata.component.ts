import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportdataComponent implements OnInit {

  importdata: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  importData(){
    console.log(this.importdata.value);
  }

}
