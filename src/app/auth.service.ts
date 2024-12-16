import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Description } from './description';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

    getDesc(rockname: string): Observable<any> {
        return this.http.get<any>(`${this.url}description/${rockname}`, { responseType: 'text'  as 'json' })
      }
    
    getTotImg(rockname: string): Observable<any> {
      return this.http.get<any>(`${this.url}totalimages/${rockname}`)
    }

    getnumImg(): Observable<any>{
      return this.http.get<any>(`${this.url}totalimages`)
    }

    getpredtot(): Observable<any>{
      return this.http.get<any>(`${this.url}predictions`)
    }

    updatedesc(body: Description[]) {
      this.http.post<any>(this.url + "updateDesc", body).subscribe(response => {});
    }

}
