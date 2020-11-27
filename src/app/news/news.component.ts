import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsDatabase } from '../news.database';
import { Article } from '../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  apiKey: string = ''
  countryName: string = ''
  newsResults: Article[] = []

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private newsDB: NewsDatabase) { }

  ngOnInit() {

    this.newsDB.api.get('apikey')
      .then(key => { this.apiKey = key.apikey })
    console.log('searching with this key: ', this.apiKey)

    this.countryName = this.activatedRoute.snapshot.params['countryName'];

    const url = `https://newsapi.org/v2/top-headlines`
    let params = (new HttpParams())
      .set('country', this.countryName)
      .set('pageSize', '30')
      // .set('apiKey', '1bd572f98198417e92b53bf53f861733')
      // .set('apiKey', this.apiKey)
    const headers= new HttpHeaders()
      // .set('content-type', 'application/json')
      .set('X-Api-Key', '1bd572f98198417e92b53bf53f861733');

    this.http
      .get<any>(url, { params: params, headers: headers })
      .toPromise()
      .then(res => {
        const results = res['articles'] as any[]
        this.newsResults = results.map(r => {
          return {
            source: r['source'].name,
            author: r['author'],
            title: r['title'],
            description: r['description'],
            article_url: r['url'],
            image_url: r['urlToImage'],
            published_time: r['publishedAt'],
            content: r['content'],
          } as Article
        })
        console.log(this.newsResults)
      })
  }
  // ngOnInit(): void {
  //   this.countryName = this.activatedRoute.snapshot.params['countryName']
  //   console.log('countryname: ', this.countryName)
  //   let results = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${this.countryName}&apiKey=1bd572f98198417e92b53bf53f861733`).toPromise
  //   // let results = this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=1bd572f98198417e92b53bf53f861733`).toPromise()
  //   let r = results
  //     console.log('news results', r)
    
  // }

}
