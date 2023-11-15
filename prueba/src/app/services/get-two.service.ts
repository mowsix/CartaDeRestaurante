import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class TwoService {
  private readonly http: HttpClient = inject(HttpClient);

  getTwo(id: number): Observable<IProduct[]> {
    console.log("------llamo al GET TWO");
    return this.http
      .get<IProduct[]>(`http://localhost:3002/getTwo?id=${id}`)
      .pipe(
        map((response: IProduct[]) => {
          return response;
        }),
        catchError(error => {
          console.error('Error en la solicitud GET:', JSON.stringify(error));
          throw error;
        })
      );
  }

}
