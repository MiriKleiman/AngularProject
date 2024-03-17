import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http: HttpClient) { }

  login(user: User):Observable<User> {
    return this._http.post<User>(`http://localhost:5228/api/User/login`,user)
  }

  addRegister(register: User) {
    return this._http.post('http://localhost:5228/api/User/register', register)
}

}
