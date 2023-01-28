import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { Credentials } from 'src/app/models/credentials';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthenticationResponse } from 'src/app/models/authentication-response';
import { UserDto } from 'src/app/models/user';
import { SignUpResponse } from 'src/app/models/sign-up-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.host}/auth/login`;

  constructor(private http: HttpClient) {}

  signUp(user: UserDto): Observable<SignUpResponse> {
    const url = `${environment.host}/auth/register`;
    return this.http.post<SignUpResponse>(url, user);
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
