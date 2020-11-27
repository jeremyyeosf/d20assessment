import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../models';
import { NewsDatabase } from '../news.database';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent implements OnInit {

  apiForm: FormGroup
  apiInput: FormControl

  constructor(private fb: FormBuilder, private router: Router, private newsDB: NewsDatabase) {
    
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
  

  async addAPI() {
    console.log('added api: ', this.apiForm.get('apiInput').value)
    const key: Api = {
      apikey: this.apiForm.get('apiInput').value
    }
    await this.newsDB.addApi(key)
    this.router.navigate([ '/countrylist' ])
  }

  async deleteAPI() {
    const key: Api = {
      apikey: this.apiForm.get('apiInput').value
    }
    await this.newsDB.deleteApi(key)
    this.newsDB.open()

  }

}
