import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
    });
  }

  submitForm(formValues){
    console.log(formValues["mobile"]);
    console.log(formValues["password"]);
  } 

}
