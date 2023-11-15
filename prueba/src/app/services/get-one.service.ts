import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { IProduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  private readonly http: HttpClient = inject(HttpClient);

  getOne(): Observable<IProduct[]> {
    console.log("------llamo al GET ONE");
    return this.http
      .get<IProduct[]>("http://localhost:3001/getOne")
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
