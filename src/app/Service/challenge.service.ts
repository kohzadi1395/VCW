import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable, throwError} from 'rxjs';
import {
  ChallengeGetDTO,
  ChallengePostDTO,
  ChallengePostFilterDTO,
  ChallengePostIdeaDTO,
  ChallengeSelectionFilterDTO,
  ChallengeSelectionIdeaDTO
} from '../DTOs/challengeDTOs';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private BaseUrl = 'http://localhost:61072/api';

  constructor(private httpClient: HttpClient) {
  }

  getChallenges(): Observable<ChallengeGetDTO[]> {
    return this.httpClient.get<ChallengeGetDTO[]>(this.BaseUrl + '/challenge').pipe(
      retry(1)
    );
  }

  getChallenge(id: string): Observable<ChallengeGetDTO> {
    return this.httpClient.get<ChallengeGetDTO>(this.BaseUrl + '/challenge/' + id).pipe(
      retry(1)
    );
  }

  getSelectionFilterDTO(id: string): Observable<ChallengeSelectionFilterDTO> {
    return this.httpClient.get<ChallengeSelectionFilterDTO>(this.BaseUrl + '/FilterStatus/' + id).pipe(
      retry(1)
    );
  }


  postChallenge(challengeDto: ChallengePostDTO) {
    this.httpClient.post(this.BaseUrl + '/challenge', challengeDto).subscribe(res => {
      console.log(res);
    });
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  postChallengeIdea(challengeIdea: ChallengePostIdeaDTO) {
    this.httpClient.post(this.BaseUrl + '/Idea/InsertIdea', challengeIdea).subscribe(res => {
      console.log(res);
    });
  }

  postChallengeFilter(challengeFilter: ChallengePostFilterDTO) {
    this.httpClient.post(this.BaseUrl + '/Filter/InsertFilter', challengeFilter).subscribe(res => {
      console.log(res);
    });
  }

  postSelectionIdea(challengeSelectionIdeaDTO: ChallengeSelectionIdeaDTO) {
    return this.httpClient.post(this.BaseUrl + '/IdeaSelection', challengeSelectionIdeaDTO).subscribe(res => {
      challengeSelectionIdeaDTO = res as ChallengeSelectionIdeaDTO;
    });
  }

  postSelectionFilter(challengeSelectionFilterDTO: ChallengeSelectionFilterDTO) {
    return this.httpClient.post(this.BaseUrl + '/FilterSelection', challengeSelectionFilterDTO).subscribe(res => {
      challengeSelectionFilterDTO = res as ChallengeSelectionFilterDTO;
    });
  }

  postRankFilter(challengeSelectionFilterDTO: ChallengeSelectionFilterDTO) {
    return this.httpClient.post(this.BaseUrl + '/FilterStatus', challengeSelectionFilterDTO).subscribe(res => {
      challengeSelectionFilterDTO = res as ChallengeSelectionFilterDTO;
    });
  }
}
