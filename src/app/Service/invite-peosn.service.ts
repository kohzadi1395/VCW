import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class InvitePersonService {
  private suggestionPersonList: any[];
  private suggestionPersonSubject = new Subject();
  PersonList = this.suggestionPersonSubject.asObservable();
   result: Response;

  constructor(private http: HttpClient) {
  }

  searchPeron(updatedReservation) {
    const objectToSend = JSON.stringify(updatedReservation);

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(objectToSend);
    this.http.get('http://localhost:61072/api/userprofile')
      .map((res: Response) => res).subscribe(res => {

      this.suggestionPersonList = Object.keys(res).map(key => res[key].Text);
      this.suggestionPersonSubject.next(this.suggestionPersonList);
      this.result = res;
      console.log(this.result);
    });
  }
}
