import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparecompanyserviceService {

  constructor() { }
}

// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {startWith, map} from 'rxjs/operators';

// export interface StateGroup {
//   letter: string;
//   names: string[];
// }

// export const _filter = (opt: string[], value: string): string[] => {
//   const filterValue = value.toLowerCase();

//   return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
// };

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit {
//   stateForm: FormGroup = this._formBuilder.group({
//     stateGroup: '',
//   });

//   stateGroups: StateGroup[] = [{
//     letter: 'A',
//     names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
//   }, {
//     letter: 'C',
//     names: ['California', 'Colorado', 'Connecticut']
//   }
//   }];

//   stateGroupOptions: Observable<StateGroup[]>;

//   constructor(private _formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
//       .pipe(
//         startWith(''),
//         map(value => this._filterGroup(value))
//       );
//   }

//   private _filterGroup(value: string): StateGroup[] {
//     if (value) {
//       return this.stateGroups
//         .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
//         .filter(group => group.names.length > 0);
//     }

//     return this.stateGroups;
//   }
// }
