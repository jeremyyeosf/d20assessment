
  export interface Api {
      id: number;
    apikey: string;
  }

  export interface Country {
      name: string;
      flag_url: string;
  }

  export interface CountryList {
      list: Country[]
  }
  
  export interface Article {
    source: string;
    author: string;
    title: string;
    description: string;
    article_url: string;
    image_url: string;
    published_time: string;
    content: string;
  }
  
  export interface NewsArticles {
    newsArticles: Article[]
  }


  