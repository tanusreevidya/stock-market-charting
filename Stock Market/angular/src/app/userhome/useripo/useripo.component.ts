import { Component, OnInit } from '@angular/core';
import { IpoServiceService } from 'src/app/adminhome/ipo/ipo-service.service';
import { Ipos } from 'src/app/models/ipos';

@Component({
  selector: 'app-useripo',
  templateUrl: './useripo.component.html',
  styleUrls: ['./useripo.component.css']
})
export class UseripoComponent implements OnInit {

  ipo : Ipos[];
  constructor(private ipoService: IpoServiceService) { }

  ngOnInit() {
    this.ipoService.getAllIpos().subscribe(data => {
      this.ipo = data;
    });
  }

}
