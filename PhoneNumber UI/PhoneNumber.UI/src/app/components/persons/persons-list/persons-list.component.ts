import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  persons: Person[] = [];
  constructor(private personsServices: PersonsService) { }

  
  ngOnInit(): void {
    this.personsServices.getAllPersons()
    .subscribe({
      next: (persons) => {
        this.persons = persons;
      },
      error: (response) => {
        console.log(response);
      }

    })
  }

}
