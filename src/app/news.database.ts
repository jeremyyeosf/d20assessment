import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Api, Country, CountryList, Article, NewsArticles} from './models';

@Injectable()
export class NewsDatabase extends Dexie {

  private api: Dexie.Table<Api, string>;

  constructor() {
    // database name
    super('apiDB')

    // setup the schema for v1
    this.version(1).stores({
        api: "api"
    })

    // get a reference to the todo collection
    this.api = this.table('api')
  }

//   async getTodoSummary(): Promise<TodoSummary[]> {
//     return (await this.todo.toArray())
//       .map(d => {
//         return {
//           id: d.id,
//           title: d.title
//         } as TodoSummary
//       })
//   }

  async addTodo(t: Api): Promise<any> {
    return await this.api.put(t)
  }

}
