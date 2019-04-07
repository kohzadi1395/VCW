import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  BaseUrl = 'http://localhost:53021/auth';
  NameKey = 'name';
  TokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {
  }

  get name() {
    return localStorage.getItem(this.NameKey);
  }

  get token() {
    return localStorage.getItem(this.TokenKey);
  }


  get isAuthentication() {
    return !!this.token;
  }

  login(loginData) {
    this.http.post(this.BaseUrl + '/login', loginData).subscribe(res => {
      this.authenticate(res);
      this.router.navigate(['/']);
    });

  }

  authenticate(res) {
    const authentication = res.json();

    if (!authentication.token) {
      return;
    }

    localStorage.setItem(this.TokenKey, authentication.token);
    localStorage.setItem(this.NameKey, authentication.firstName);
  }

  logout() {
    localStorage.removeItem(this.TokenKey);
    localStorage.removeItem(this.NameKey);
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BaseUrl + '/register', user).subscribe(res => {
      this.authenticate(res);
      this.router.navigate(['/']);
    });
  }
}
