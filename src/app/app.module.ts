import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { HomeComponent } from './components/home/home.component';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { paymentReducer } from './components/store/models/reducers/cardDetails.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    PaymentPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ToastNoAnimationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      payments: paymentReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
