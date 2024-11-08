import { Component, EventEmitter, Output } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Output() personClicked = new EventEmitter<EPerson>();
  manyPerson = ManyPerson;

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    address: 'none'
  }

  // sortOrder : EPerson = {
  //   givenName: 'none',
  //   surName: 'none',
  //   age: 'none',
  //   email: 'none',
  //   address: 'none'
  // }

  sortData(sortKey: keyof EPerson): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'dsc'
      this.manyPerson = sortBy(this.manyPerson, sortKey).reverse()
    } else {
      // if (this.sortOrder[soryKey] === 'asc')
      console.log(">>>", this.sortOrder[sortKey]);
      console.log("2>>>", sortKey)
      this.sortOrder[sortKey] = 'asc';
      this.manyPerson =sortBy(this.manyPerson, sortKey)
      console.log("3>>>", this.sortOrder[sortKey])
    }
  }


//   sortData(sortKey: keyof EPerson): void {
//     if (this.sortOrder[sortKey]==='asc') {
//         this.sortOrder[sortKey]='desc'
//         this.manyPerson = sortBy(this.manyPerson,sortKey).reverse()
//     } else {        // if (this.sortOrder[sortKey]==='asc')
//         this.sortOrder[sortKey]='asc';
//         this.manyPerson = sortBy(this.manyPerson,sortKey)
//     }
// }

  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey] === 'asc')
       return '↑'
    else if (this.sortOrder[sortKey] === 'dsc') 
      return '↓'
    else return ''
  }

  // sortSign(sortKey: keyof EPerson): string {
  //   if (this.sortOrder[sortKey] === 'asc')
  //      return '&uarr;'
  //   else if (this.sortOrder[sortKey] === 'dsc') 
  //     return '&larr;'
  //   else return ''
  // }

  onPersonClick(person: EPerson) {
    console.log(person);
    this.personClicked.emit(person)
  }


}
