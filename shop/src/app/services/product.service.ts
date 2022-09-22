import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { catchError, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  //API den httpget ile veri çekiyoruz burada subscribe metodunu görene kadar işlemler gerçekleştiriyoruz. subscribe görünce bitecek
  getProducts(categoryId: any): Observable<Product[]> { //diğer taraftan subscribe olabilir
    let newPath = this.path;
    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }
    // alert(categoryId) //geldi mi diye kontrol ettik
    return this.http
      .get<Product[]>(newPath
      )
      .pipe(
        tap((data) => console.log(JSON.stringify(data))), //observable mimariyle geliyor
        catchError(this.HandleError)
      );
  }

  addProduct(product:Product): Observable<Product> {
     const httpOptions={
      headers : new HttpHeaders(
        {
          'Content-Type':'application/json',
          'Authorization':'Token'
        }
      )
     }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap((data) => console.log(JSON.stringify(data))), //observable mimariyle geliyor
      catchError(this.HandleError)
    );}

  HandleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //instanceof: objenin belirli bir sınıfa ait oluğ olmadığını kontrol eder
      errorMessage = 'Bir Hata Oluştu' + err.error.message;
    } else {
      errorMessage = 'Sistemsel Bir Hata';
    }
    return throwError(errorMessage);
  }
}
