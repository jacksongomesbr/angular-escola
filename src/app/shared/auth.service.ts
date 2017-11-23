import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  API_URL = 'http://localhost:3000';
  user = null;

  constructor(private http: HttpClient) {
  }

  auth(login: string, senha: string): Observable<any[]> {
    const qs = 'nome=' + login + '&senha=' + senha;
    return this.http.get<any[]>(this.API_URL + '/usuarios?' + qs);
  }

  set(user) {
    this.user = user;
  }

  get() {
    return this.user;
  }

  clear() {
    this.user = null;
  }

  logout() {
    this.clear();
  }
}
