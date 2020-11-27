import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  countryName = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryName = this.activatedRoute.snapshot.params['countryName']
    
  }

}
