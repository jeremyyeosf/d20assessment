import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsDatabase } from './news.database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apikey: string = ''
  // apikey: string = '1bd572f98198417e92b53bf53f861733'
  constructor(private router: Router, private newsDB: NewsDatabase) {
  }

  async ngOnInit(): Promise<void> {
    // let keyfromDB = await this.newsDB.getApi().then()
    // console.log('apikey found: ', keyfromDB[0]['apikey'])
    // if (typeof keyfromDB[0]['apikey'] === 'string' ) {
    //   this.apikey = keyfromDB[0]['apikey']
    // } else {
    //   return null
    // }
    

    if (this.apikey.length === 0) {
      this.router.navigate([ '/apikey' ])
    } else {
      this.router.navigate([ '/countrylist' ])
    }
    
    
    
    console.log('apikeylength: ', this.apikey.length)
    
  }
}
