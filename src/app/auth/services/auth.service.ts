import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { Credentials } from 'src/app/models/credentials';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationResponse } from 'src/app/models/authentication-response';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.host}/auth/login`;

  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<any> {
    console.warn(user)
    const url = `${environment.host}/auth/register`;
    return this.http.post<any>(url, user)
    return of({})
  }

  logIn(credentials: Credentials): Observable<any> {
    console.warn('credentials', credentials);
    //return of(true)
    return this.http
      .post<AuthenticationResponse>(`${this.url}`, credentials)
      .pipe(
        tap((response) => console.log(response)),
        shareReplay()
      );
  }

  logOut() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    //return localStorage.getItem(Constants.JWT_TOKEN) ? true : false;
    return true;
    //return this.http.get<ResponseMessage>(`${url}/check-authentication`)
  }
}
