import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSubject = new BehaviorSubject<string>('');
  public username$ = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {}

  setLoggedInUsername(username: string) {
    this.usernameSubject.next(username);
  }
  authUser(username: string, password: string) {
    return this.http.post<any>('http://localhost:5111/api/account/login', { username, password })
      .pipe(
        catchError(error => {
          console.error("API error:", error);
          return throwError(error);
        }),
        map(response => {
          const loggedInUsername = response?.username || '';
          this.setLoggedInUsername(loggedInUsername);
          return loggedInUsername;
        })
      );
  }
}
