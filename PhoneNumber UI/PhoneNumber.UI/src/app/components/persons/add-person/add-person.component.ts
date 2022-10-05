import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  addPersonRequest: Person = {
      id: '',
      name: '',
      email: '',
      phone: 0,
      salary: 0,
      department: ''
  };
  constructor(private personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
  }
  
  addPerson() {
    this.personService.addPerson(this.addPersonRequest)
    .subscribe({
      next: (person) => {
        this.router.navigate(['persons']);
      }
    });
  }
}
