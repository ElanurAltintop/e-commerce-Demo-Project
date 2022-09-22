import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({  // Bu modül içinde bu komponentleri kullanacağız anlamına geliyor.
  declarations: [  // istenilen yerden çağırılabilir artık.
    AppComponent,
    ProductComponent
  ],
  imports: [ //başka modüller kullanılacaksa eklenmesi gerekir, yeni modüller buraya eklenecek.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //bu componentden başlar demek, css ile alakası yok.
})
export class AppModule { } //Uygulama modülünün bu olduğunu da main.ts dosyasından bakarak anlayabiliriz.
