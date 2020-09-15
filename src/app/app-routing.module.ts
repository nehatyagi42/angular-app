import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
/* signin TemplateDriven Form */
{ path:'signin', component:SigninComponent},
/* ***********************signin TemplateDriven Form*********************************** */
  { path: 'checkout', component: CheckoutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
