import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Description } from './description';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

    
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

    addimg(formData : {}){
      this.http.post<any>(this.url + "saveImage", formData).subscribe(response =>{});
    }

    getphoto(classe : string, pageNumber : number): Observable<any>{
      const params = new HttpParams()
      .set('pageNumber',pageNumber.toString())
      
      return this.http.get<any>(`${this.url}images/${classe}`, { params })
    }

}
