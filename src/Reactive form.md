Reactive form :
Step1: create component like ng g c checkout.
Step2: In app.routing.module.ts you have to create checkout path and import also.
Step3: In app.module.ts you are imported reactive form module and in import array part you are adding that module name.
Step4: In checkout.component.ts  give same FormGroup name as in the template.
Step5: In checkout .component.html Add formControlName for every input field.
Step6: In checkout.component.ts inject the FormBuilder in the constructor.
