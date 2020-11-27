import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apikey: string = ''
  // apikey: string = '1bd572f98198417e92b53bf53f861733'
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('apikeylength: ', this.apikey.length)
    if (this.apikey.length === 0) {
      this.router.navigate([ '/apikey' ])
    } else {
      this.router.navigate([ '/countrylist' ])
    }
  }
}
