'use strict';
const Q = require('q');

class Article{
  constructor(){
    this.articles = [
      {id: 1, title: 'some title', text: 'some text'},
      {id: 2, title: 'some other title', text: 'someething happened'},
      {id: 3, title: 'new title', text: 'new things'},
      {id: 4, title: 'some random headline', text: 'apes can talk'},
    ];
  }

  getArticles(){
    const defer = Q.defer();
    setTimeout( ()=>{
      defer.resolve(this.articles);
    }, 500);
    return defer.promise;
  }

}

module.exports = Article;
