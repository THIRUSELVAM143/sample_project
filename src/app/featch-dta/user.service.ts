import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private apiUrl1='https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    console.log(this.apiUrl);
    return this.http.get<any>(this.apiUrl);
  }

  getAlbums(): Observable<any>{
    console.log(this.apiUrl1);
    return this.http.get<any>(this.apiUrl1);
  }

  click(){
    console.log('kii');
  }
}
