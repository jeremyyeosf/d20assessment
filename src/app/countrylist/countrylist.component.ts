import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Country } from '../models';
import { NewsDatabase } from '../news.database';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  
  countryList: Country[] = []
  countriesExist: boolean = false
  countries = 'ae;ar;at;au;be;bg;br;ca;ch;cn;co;cu;cz;de;eg;fr;gb;gr;hk;hu;id;ie;il;in;it;jp;kr;lt;lv;ma;mx;my;ng;nl;no;nz;ph;pl;pt;ro;rs;ru;sa;se;sg;si;sk;th;tr;tw;ua;us;ve;za'
  // countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']
  
  constructor(private router: Router, private http: HttpClient, private newsDB: NewsDatabase) { }

  ngOnInit(): void {
    if( !this.countriesExist) {
      let r = this.http.get<any>(`https://restcountries.eu/rest/v2/alpha?codes=${this.countries}`)
        .toPromise()
        .then(resp => {
          console.log('resp: ', resp)
          this.countryList = resp.map(r => {
            return {
              name: r['name'],
              flag_url: r['flag'],
              alpha2Code: r['alpha2Code']
            } as Country
          })
          console.info('>>> searchResults: ', this.countryList)
          this.newsDB.addCountryList(this.countryList)
            .then()
        })
    } else {
      console.log('countries already found')
    }

  }
  setAPI() {
    this.router.navigate([ '/apikey' ])
  }
}
