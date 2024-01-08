import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint:string = 'https://csoothsayer-ea6593c0464f.herokuapp.com/api'
  //endpoint:string = 'http://localhost:8000/api'
  constructor(private http: HttpClient) { }

  postHtml(html:string):Observable<any[]>{
    let content = {html: html}
    return this.http.post<any>(this.endpoint, content)
  }
}
