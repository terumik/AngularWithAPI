import { Injectable } from '@angular/core';
import { Brush } from "./brush-sort/brush";
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class BrushService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was : ${error.error} `);
    }
    return throwError ('Something bad happened!');
  }

  getBrushes(material?:String):Observable<Brush[]>{
    if(material){
      return this.httpClient.get<Brush[]>('http://hanaharrington.ca/Rush2Brush.php?api_key=Access123&rush2brush='+material)
      .pipe(catchError(this.handleError));
    }
    return this.httpClient.get<Brush[]>('http://hanaharrington.ca/Rush2Brush.php?api_key=Access123')
    .pipe(catchError(this.handleError));
  }


  
}
