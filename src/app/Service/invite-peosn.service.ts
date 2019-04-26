import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Rx';
import {Person} from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class InvitePersonService {
  private suggestionPersonList: any[];
  private suggestionPersonSubject = new Subject();
  PersonList = this.suggestionPersonSubject.asObservable();
  result: Person[];

  constructor(private http: HttpClient) {
  }

  searchPerson(updatedReservation) {
    const objectToSend = JSON.stringify(updatedReservation);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(objectToSend);
    this.http.get('http://localhost:61072/api/userprofile')
      .map((res: Response) => res).subscribe(res => {
      this.suggestionPersonList = Object.keys(res).map(key => res[key]);
      this.suggestionPersonSubject.next(this.suggestionPersonList);
      this.result = Object.keys(res).map(key => res[key]);
    });
  }
}