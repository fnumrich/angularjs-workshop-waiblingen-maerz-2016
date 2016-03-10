"use strict"

function bookShow($http) {
  
  // var that = this
  // besser im Hinblick auf ES2015 / AngularJs 2.0
  //      .bind(this))
  // bind bindet das funktionslokale this an das übergebene Objekt
  
  $http.get('http://bookmonkey-api.angularjs.de/books/978-3-89864-829-5')
    .then(function(response){
      return response.data
    })
    .then(function(book) {
      this.book = book
    }.bind(this))  
    // ES 2015 .then(book => this.book = book) 
  
  /*
  this.book = {
        title:'The Title',
        author:'The Author',
        abstract:'The abstract'
      }
  */
}
angular.module('myApp.bookShow', [])
  .component('bookShow', {
    templateUrl: 'components/book_show/book_show.html',
    controller: bookShow
  })
