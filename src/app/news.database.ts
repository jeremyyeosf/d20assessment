import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Api, Country, Article} from './models';

@Injectable()
export class NewsDatabase extends Dexie {

  private api: Dexie.Table<Api, string>;
  private countries: Dexie.Table<Country, string>;
  private articles: Dexie.Table<Article, string>;

  constructor() {
    // database name
    super('NewsDB')
    // setup the schema for v1
    this.version(1).stores({
        api: '++id'
    })
    this.version(2).stores({
        countries: '++id'
    })
    this.version(3).stores({
        articles: '++id'
    })

    // get a reference to the todo collection
    this.api = this.table('api')
    this.countries = this.table('countries')
    this.articles = this.table('articles')

  }


  async addApi(key: Api): Promise<any> {
    return await this.api.add(key)
  }

  async deleteApi(key: Api): Promise<any> {
      return await this.api.clear()
  }

  async addCountryList(c: Country[]): Promise<any> {
// @ts-ignore
        return await this.countries.put(c)
    
  }

  async saveArticles(a: Article[]): Promise<any> {
    // @ts-ignore 
    return await this.articles.put(a)

      
  }

  async getApi(): Promise<any> {
    return (await this.api.toArray())
      .map(d => {
        return {
          apikey: d.apikey
        } 
      })
  }

}
