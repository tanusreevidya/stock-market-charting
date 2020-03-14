import { Component, OnInit } from '@angular/core';
import { SectorService } from './sector.service';
import { Router } from '@angular/router';
import { Sector } from 'src/app/models/sector';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {


  constructor(private sectorService:SectorService, private router:Router) { }
  sector: Sector[];
  ngOnInit() {
    this.sectorService.getAllSectors().subscribe(data => {
      this.sector = data;
    });
  }
  deleteSector(sec : Sector){
    this.sectorService.deleteSector(sec.id).subscribe();
    this.sector = this.sector.filter(u => sec != sec);
    this.router.navigate(['sectorList']);
  }
  updateSector(sec : Sector){
   // console.log("id: "+user.id+"   ")
    //localStorage.removeItem('userId');
   // localStorage.setItem("usr",user.toString());
    localStorage.setItem('secId', sec.id.toString());
    this.router.navigate(['update-sector']);
  }

  addSector(){
    this.router.navigate(['add-sector'])
  }

}
