import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@classes/user';
import { JsonConvert } from 'json2typescript';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserCollectorService {

  constructor(private provider: HttpService) { }

  getApprovers(): Observable<User[]> {
    return Observable.create(observer => {
      this.provider.get(`/user`).subscribe(
        response => {
          const jsonConvert: JsonConvert = new JsonConvert();
          observer.next(jsonConvert.deserialize(response.Result, User));
        });
    });
  }

  createUser(user): void {
    this.provider.post(`/user`, user).subscribe(
      response => {
        console.log(response);
      });
  }
}
