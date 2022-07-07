import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding-chalange';

  people: Person[] = []

  constructor( private http: HttpClient ){}

  ngOnInit(){
    this.http.get('./assets/people.json').subscribe((response : any) => { this.people = response });
  }

  deletePerson(id: number){
    const changedTeamMember = [...this.people].filter((person) => { person.id !== id});
    this.people = changedTeamMember;
    console.log(this.people);
  }

}

export class Person {
  constructor( 
    public id: number,
    public firstName: string,
    public lastName: string
  ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
