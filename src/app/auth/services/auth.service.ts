import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private permissions = new BehaviorSubject<string[]>([]);

  private apiUrl = `${environment.apiUrl}/auth`;

  permissions$ = this.permissions.asObservable();

  constructor(private http:HttpClient) { }


login(credentials:any): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, credentials, {observe:'response'})
}

register(data:any): Observable<any> {
  return this.http.post(`${this.apiUrl}/register`, data)
}

forgotPassword(email:any): Observable<any> {
  return this.http.post(`${this.apiUrl}/forgot-password`, email)
}

resetPassword(email:any, token:any): Observable<any> {
  return this.http.post(`${this.apiUrl}/reset-password/${token}`, email)
}

logout(): void{
localStorage.removeItem('token')
}

getToken(): string {
  return localStorage.getItem('token') || ''
}


getPermission() {
  return this.permissions
}

}
