import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  myFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.myFormGroup = this.formBuilder.group({
    //   mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')])],
    //   password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
    // });

    this.myFormGroup = new FormGroup({
      mobile: new FormControl('9025720760', Validators.required),
      password: new FormControl('123', Validators.compose([Validators.required])),
    })

  }

  submitForm(formValues) {
    console.log(this.myFormGroup.controls["mobile"].value);
    console.log(formValues["mobile"]);
    console.log(formValues["password"]);
  }

}
