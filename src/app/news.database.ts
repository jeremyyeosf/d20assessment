import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ApikeyComponent } from './apikey/apikey.component';
import { Api, Country, Article} from './models';

@Injectable()
export class NewsDatabase extends Dexie {

  api: Dexie.Table<Api, string>;
  countries: Dexie.Table<Country, string>;

  constructor() {
    // database name
    super('api')
    // setup the schema for v1
    this.version(1).stores({
        api: 'apikey'
    })
    this.version(2).stores({
        countries: 'name, flag_url'
    })

    // get a reference to the todo collection
    this.api = this.table('api')
    this.countries = this.table('countries')

  }


  async addApi(key: Api): Promise<any> {
    return await this.api.add(key)
  }

  async deleteApi(key: Api): Promise<any> {
      return await this.api.clear()
  }

  async addCountryList(countryList): Promise<any> {
    return await this.countries.add(countryList)
  }

}
