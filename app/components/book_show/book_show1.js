"use strict"

function bookShow() {
  this.book = {
        title:'The Title',
        author:'The Author',
        abstract:'The abstract'
      }
}
angular.module('myApp.bookShow', [])
  .component('bookShow', {
    templateUrl: 'components/book_show/book_show.html',
    controller: bookShow
  })
