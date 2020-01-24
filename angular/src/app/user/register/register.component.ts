import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //@Input() messageFromParent: string;
  message = "hello from child";

  @Output() childMessage = new EventEmitter<string>();
  constructor() { }
  send(n :string){
    this.childMessage.emit(this.message);
  }

  ngOnInit() {
       
  }

}
