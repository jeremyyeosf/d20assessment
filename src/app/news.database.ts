import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ApikeyComponent } from './apikey/apikey.component';
import { Api, Country, CountryList, Article, NewsArticles} from './models';

@Injectable()
export class NewsDatabase extends Dexie {

  private api: Dexie.Table<Api, string>;

  constructor() {
    // database name
    super('api')

    // setup the schema for v1
    this.version(1).stores({
        api: '++id, apikey'
    })

    // get a reference to the todo collection
    this.api = this.table('api')
  }


  async addApi(key: Api): Promise<any> {
    return await this.api.add(key)
  }

  async deleteApi(key: Api): Promise<any> {
      return await this.api.clear()
  }

}
