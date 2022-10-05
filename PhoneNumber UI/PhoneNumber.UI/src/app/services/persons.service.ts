import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPersonComponent } from '../components/persons/add-person/add-person.component';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseApiUrl + '/api/persons');
  }
   
  addPerson(addPersonRequest: Person): Observable<Person>{
      addPersonRequest.id = '00000000-0000-0000-0000-000000000000'
      return this.http.post<Person>(this.baseApiUrl + '/api/persons', 
      addPersonRequest);
  }

  getPerson(id: string): Observable<Person>{
     return this.http.get<Person>(this.baseApiUrl + '/api/persons/' + id);
  }

  updatePerson(id: string, updatePersonRequest: Person): 
  Observable<Person> {
    return this.http.put<Person>(this.baseApiUrl + '/api/persons/' + id, 
    updatePersonRequest);
  }

  deletePerson(id: string): Observable<Person>{
      return this.http.delete<Person>(this.baseApiUrl+'/api/persons/' + id);
  }

}

