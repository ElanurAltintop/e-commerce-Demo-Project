import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { catchError, Observable,throwError } from 'rxjs';
import {tap} from 'rxjs/operators'
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  

  //API den httpget ile veri çekiyoruz burada subscribe metodunu görene kadar işlemler gerçekleştiriyoruz. subscribe görünce bitecek
  getCategories():Observable<Category[]> //diğer taraftan subscribe olabilir
    {
    return this.http.get<Category[]>(' http://localhost:3000/categories').pipe(
      tap(data=>console.log(JSON.stringify(data))),  //observable mimariyle geliyor
      catchError(this.HandleError)
    );
  }


  HandleError(err: HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent) //instanceof: objenin belirli bir sınıfa ait oluğ olmadığını kontrol eder
    {
      errorMessage="Bir Hata Oluştu" +err.error.message
    }
    else{
      errorMessage="Sistemsel Bir Hata"
    }
    return throwError(errorMessage)
  }
}