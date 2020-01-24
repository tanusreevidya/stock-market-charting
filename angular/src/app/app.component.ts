// import { Component } from '@angular/core';    
    
// 	@Component({    
//     selector: 'app-root',    
//     template: `<h2>{{title}}</h2>      
// 	<p *ngIf="showElement">Show Element</p>      
// 	<div [ngSwitch]="inpvalue">      
// 	<p style='color:blue'  *ngSwitchCase="1">You have selected M S Dhoni</p>      
// 	<p style='color:blue'  *ngSwitchCase="2">You have selected Sachin Tendulkar</p>      
// 	<p style='color:blue'  *ngSwitchCase="3">You have selected Satyaprakash Samantaray</p>     
// 	<p style='color:red'  *ngSwitchDefault>Sorry! Invalid selection....</p>      
// 	</div>`      
// 	})    
// 	export class AppComponent {    
    
// 		inpvalue: number = 3;    
// 	}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockholder';
}

