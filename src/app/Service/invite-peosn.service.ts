import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Rx';
import {Person} from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class InvitePersonService {
  private suggestionPersonList: Array<Person> = [];
  private suggestionPersonSubject = new Subject();
  PersonList = this.suggestionPersonSubject.asObservable();

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
    this.http.get('http://localhost:61072/api/users').subscribe(response => {
      this.suggestionPersonList = Object.keys(response).map(key => response[key]);
      this.suggestionPersonSubject.next(this.suggestionPersonList);
      console.log(response);
    }, error => {
      this.handleError('Unable to get message');
    });
  }

  private handleError(error) {
    console.log(error);
    // this.snackBar.open(error, 'Close', { duration: 3500, verticalPosition: 'top', panelClass: 'snack-error'});

  }
}
