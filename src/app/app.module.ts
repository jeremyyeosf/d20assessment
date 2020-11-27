import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { ApikeyComponent } from './apikey/apikey.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NewsDatabase} from './news.database'

const ROUTES: Routes = [
  // { path: '', component: AppComponent },
  { path: 'countrylist', component: CountrylistComponent },
  { path: 'apikey', component: ApikeyComponent },
 { path: 'countrylist/:countryName', component: NewsComponent  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent,
    ApikeyComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [NewsDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
