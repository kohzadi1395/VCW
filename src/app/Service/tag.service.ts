import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private BaseUrl = 'http://www.mocky.io/v2/5cb2ce7c3000007d00a78cbd';
  private tagList = [];
  private tagSubject = new Subject();
  tags = this.tagSubject.asObservable();


  constructor(private   http: HttpClient) {
  }

  getTags() {
    this.http.get(this.BaseUrl).subscribe(res => {
      this.tagList = Object.keys(res).map(key => res[key].Text);
      this.tagSubject.next(this.tagList);
    });
  }
}
