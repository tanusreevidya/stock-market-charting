import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-addsector',
  templateUrl: './addsector.component.html',
  styleUrls: ['./addsector.component.css']
})
export class AddsectorComponent implements OnInit {

  addSectorForm : FormGroup;

  constructor( private formBuilder: FormBuilder, private sectorService: SectorService) { }

  ngOnInit() {
    this.addSectorForm = this.formBuilder.group({
        id:['',Validators.required],
        name:['',Validators.required],
        brief:['',Validators.required],
       
    });
  }

  addTheSector(){
    this.sectorService.saveSector(this.addSectorForm.value).subscribe(data =>{
      console.log('stock entered successfully');
  });

}
}