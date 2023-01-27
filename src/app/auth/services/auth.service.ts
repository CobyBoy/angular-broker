import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { Credentials } from 'src/app/models/credentials';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationResponse } from 'src/app/models/authentication-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.host}/auth/login`;

  constructor(private http: HttpClient) {}

  logIn(credentials: Credentials): Observable<any> {
    console.warn('credentials', credentials);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //return of(true)
    return this.http
      .post<AuthenticationResponse>(`${this.url}`, credentials, {
        headers: headers,
      })
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
