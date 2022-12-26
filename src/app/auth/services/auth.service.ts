import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials } from 'src/app/models/credentials';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.host}/auth`
  constructor() {}

  login(credentials: Credentials): Observable<boolean> {
    console.warn('credentials', credentials);
    return of(true)
    //return this.http.post<User>(`${url}/login`, credentials).shareReplay();
  }

  isAuthenticated(): boolean {
    return true;
    //return this.http.get<ResponseMessage>(`${url}/check-authentication`)
  }
}
