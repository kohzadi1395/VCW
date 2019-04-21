import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
// import {Subject} from 'rxjs/Rx';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  ChallengeList = [];
  private BaseUrl = 'http://localhost:61072/api/challenge';
  private ChallengeSubject = new Subject();
  Challenges = this.ChallengeSubject.asObservable();


  constructor(private http: HttpClient) {
  }

  getChallenges() {
    this.http.get(this.BaseUrl).subscribe(res => {
      this.ChallengeList = Object.keys(res).map(key => res[key]);
      this.ChallengeSubject.next(this.ChallengeList);
    });
  }
}

