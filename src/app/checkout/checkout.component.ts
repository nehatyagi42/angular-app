import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup; //Step3:give same FormGroup name as in the template

  constructor(private formBuilder: FormBuilder) {
    // its nothing but build the form usinf FormBuilder

    this.checkoutForm = formBuilder.group({
      //we are specifying the form name here whatever we are giving in html
      //In the Form Bulder we are creating the group of form element
      //these exactly should be smae as your form

      /*   emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl(), */

      /* For Validation Purpose of Reactive Form */

      emailAddr: [
        '',
        [
          Validators.minLength(5),
          Validators.minLength(10),
          Validators.required,
          Validators.email,
        ],
      ],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });
  }

  /* we are setting all the fields */
  ngOnInit(): void {
    this.checkoutForm.setValue({
      emailAddr: 'test@gmail.com',
      quantity: 10,
      terms: true,
    });

    this.checkoutForm.patchValue({
      emailAddr: 'test@gmail.com',
      quantity: 10,
     
    });


  }

  postData() {
    console.log(this.checkoutForm);
    console.log(`Entire form value` + this.checkoutForm.value); // value printed
    console.log(`Email Address` + this.checkoutForm.value.emailAddr); // particular field printing

    /* get tha values of form 
    1.we are getting the values of entire form
    2.we are getting the values of individual form control

    
    */
    console.log(this.checkoutForm.value); // value of all FormControls of the Form
    console.log(this.checkoutForm.value.emailAddr);
    console.log(this.checkoutForm.value.quantity);
    console.log(this.checkoutForm.value.terms);
    this.resetForm(); //second way to clear the entire field or form.
    //(when you click on checkout means submit the data)
    // it wil load the values in console and clear the fields also.
    //we are getting the values of entire form
    // we are getting the values of individual form control
  }


  /* One way to reset the forms */
  resetForm() {
    this.checkoutForm.reset();//we will use reset method to reset  the entire form (means that when you click on clear button then your set values will be cleared)

  }
}
