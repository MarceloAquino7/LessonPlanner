import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http';
import { User } from 'src/app/classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCollectorService {

  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get(`/user`);
  }
}

