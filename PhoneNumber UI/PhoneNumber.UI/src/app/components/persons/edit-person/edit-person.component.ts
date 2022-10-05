import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  personDetails: Person = {
      id: '',
      name: '',
      email: '',
      phone: 0,
      salary: 0,
      department: ''
  };

  constructor(private route: ActivatedRoute, private personService: PersonsService, 
  private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id){
          this.personService.getPerson(id)
          .subscribe({
            next: (response) =>{
               this.personDetails = response;
            } 
          });
        }
      }
    })
  }

  updatePerson(){
     this.personService.updatePerson(this.personDetails.id, this.personDetails)
     .subscribe({
      next: (response) => {
        this.router.navigate(['persons']);
      }
     });
  }

  deletePerson(id: string){
    this.personService.deletePerson(id)
    .subscribe({
      next: (response:any) => {
        this.router.navigate(['persons']);
      }
    });

  }

}
