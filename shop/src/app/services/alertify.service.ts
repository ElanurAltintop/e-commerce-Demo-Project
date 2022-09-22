import { Injectable } from '@angular/core';
declare let alertify : any;

@Injectable({  //global olarak tanıımlamayı sağlar burası olmazsa module içinde provider a git tanımla
  providedIn: 'root' 
})
export class AlertifyService {

  constructor() { }

success(message:string){
  alertify.success(message)
}

error(message:string){
  alertify.error(message)
}

warning(message:string){
  alertify.warning(message)
}

}
