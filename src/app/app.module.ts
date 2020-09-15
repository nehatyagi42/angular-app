import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
/* FormModule for template driven form */
import { FormsModule } from '@angular/forms';
/* Reactive form module  */
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component'; //Our FormModule is added and imported into the array means import[]
/* Step1 Import Form Module */
@NgModule({
  declarations: [AppComponent, SigninComponent, CheckoutComponent],
  imports:
    [BrowserModule,
      AppRoutingModule,
      FormsModule,
    ReactiveFormsModule],// Step 1 completed in reactive form module
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


