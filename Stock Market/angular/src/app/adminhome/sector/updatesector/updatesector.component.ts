import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectorService } from '../sector.service';
import { Router } from '@angular/router';
import { Sector } from 'src/app/models/sector';

@Component({
  selector: 'app-updatesector',
  templateUrl: './updatesector.component.html',
  styleUrls: ['./updatesector.component.css']
})
export class UpdatesectorComponent implements OnInit {

  updateSectorForm : FormGroup;
  constructor(private sectorService: SectorService, private formBuilder:FormBuilder, private router: Router) { }
   sector :  Sector[];
  ngOnInit() {
    this.updateSectorForm = this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      brief:['',Validators.required],
     });
  

  const id = localStorage.getItem('secId');
  if(+id > 0){
  this.sectorService.getSectorById(+id).subscribe(com => {
         this.updateSectorForm.patchValue(com);
  });
}

}
updateTheSector(stk : Sector){
  this.sectorService.updateSectorInfo(this.updateSectorForm.value).subscribe(u => {
    this.router.navigate(['sectorList']);
  });
}

}
