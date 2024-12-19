import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Description } from './description';

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

    getTotalConfidence(): Observable<number> {
      return this.http.get<number>(`${this.url}predictions/totalconfidence`).pipe(
        map((response: number) => {
          // Verifica che la risposta sia un numero valido
          if (!isNaN(response)) {
            return response;
          }
          throw new Error('La risposta non è un numero valido.');
        }),
        catchError((error) => {
          console.error('Errore durante la richiesta:', error);
          throw error; // Propaga l'errore
        })
      );
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
