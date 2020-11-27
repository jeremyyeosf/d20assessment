import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {

  apiForm: FormGroup
  apiInput: FormControl

  constructor(private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    this.apiForm = this.fb.group({
      apiInput: this.fb.control('', [ Validators.required ])
    })
    // this.apiInput = this.apiForm.get('title') as FormControl
  }
  goBack() {
    this.apiForm.reset()
    this.router.navigate([ '/countrylist' ])
  }
  deleteAPI() {}

  addAPI() {
    console.log('added api: ', this.apiForm.value)
  }
}
