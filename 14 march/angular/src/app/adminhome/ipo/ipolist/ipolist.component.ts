import { Component, OnInit } from '@angular/core';
import { IpoServiceService } from '../ipo-service.service';
import { Router } from '@angular/router';
import { Ipos } from 'src/app/models/ipos';

@Component({
  selector: 'app-ipolist',
  templateUrl: './ipolist.component.html',
  styleUrls: ['./ipolist.component.css']
})
export class IpolistComponent implements OnInit {

  constructor(private ipoService:IpoServiceService, private router:Router) { }
ipo: Ipos[];
  ngOnInit() {
    this.ipoService.getAllIpos().subscribe(data =>{
      this.ipo = data;
    });
  }
  deleteIpo(ipo : Ipos){
     this.ipoService.deleteIpo(ipo.id).subscribe();
     this.ipo = this.ipo.filter(u => ipo != ipo);
     this.router.navigate(['ipolist'])
  }
updateIpo(ipo : Ipos){
  localStorage.setItem('ipoId',ipo.id.toString());
  this.router.navigate(['update-ipo']);
}

addIPO(){
  this.router.navigate(['ipo']);
}
}
