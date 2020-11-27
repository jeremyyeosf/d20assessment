import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  setAPI() {
    this.router.navigate([ '/apikey' ])
  }
}
