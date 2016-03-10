"use strict"

angular.module('myApp.colorpicker', [])
  .component('colorpicker', {
    bindings: {
      red: "@",
      green: "@",
      blue: "@",
      alpha: "="
    },
    controller: function () {
      this.alpha = this.alpha || 0.5
    },
    templateUrl: 'components/colorpicker/colorpicker.html'
  })
