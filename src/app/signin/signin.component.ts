import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
/* TemplateDrivenForm
here just call the method and that is declared in signin.component.html


*/
  loginUser(signInForm: NgForm) {
    console.log(signInForm);
    console.log(signInForm.value.emailAddressField);//extracting the email address here if u inspect it then email is showed in console
    console.log(signInForm.value.passwordField);
    console.log(signInForm.value.termField);
    console.log(signInForm.value.genderField);
  }
}
