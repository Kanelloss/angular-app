import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [
    { 
      givenName: "name1",
      surName: "surname1",
      age: 22,
      email: "name1@aueb.gr",
      address: "Athens"
    },

    {
      "givenName": "Andrew",
      "surName": "Brooks",
      "email": "andrew@aol.com",
      "age": 22,
      "address": "Tylersburg"
    },
    {
      "givenName": "Kevin",
      "surName": "Hughes",
      "email": "k.h@gmail.com",
      "age": 67,
      "address": "Waldron"
    },
    {
      "givenName": "Thomas",
      "surName": "Hughes",
      "email": "thomasj@gmail.com",
      "age": 31,
      "address": "Conception Junction"
    },
    {
      "givenName": "Maria",
      "surName": "Green",
      "email": "maria.m.green13@hotmail.com",
      "age": 67,
      "address": "Peapack and Gladstone"
    },
    {
      "givenName": "Sebastian",
      "surName": "Gonzales",
      "email": "sgonzales@yahoo.com",
      "age": 27,
      "address": "Meridale"
    },
    {
      "givenName": "Claire",
      "surName": "Turner",
      "email": "c_turner@ymail.com",
      "age": 40,
      "address": "Dahlonega"
    },
    {
      "givenName": "Justin",
      "surName": "Miller",
      "email": "justinmiller@yahoo.com",
      "age": 65,
      "address": "Little Falls"
    },
    {
      "givenName": "Anna",
      "surName": "Miller",
      "email": "anna.ruth.miller84@live.com",
      "age": 19,
      "address": "Hayward"
    },
    {
      "givenName": "Tiffany",
      "surName": "Adams",
      "email": "t_m_adams@yahoo.com",
      "age": 49,
      "address": "Suffolk"
    },
    {
      "givenName": "Jennifer",
      "surName": "Jackson",
      "email": "j.a.jackson@yahoo.com",
      "age": 71,
      "address": "Richford"
    }
  ]
}
