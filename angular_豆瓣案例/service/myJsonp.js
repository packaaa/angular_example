(function(angular) {
  var app = angular.module('myJsonpService', []);
  app.service('myService', ["$window", function($window) {

    this.jsonp = function(url, arg, fn) {

      //创建script标签
      var script = $window.document.createElement('script');
      var querystring = '';
      for (var key in arg) {
        querystring += key + "=" + arg[key] + "&"
      }


      var funcName = 'myJsonp' + $window.Math.random().toString().substr(2);
      url += "?" + querystring + 'callback=' + funcName;


      $window[funcName] = function(data) {
        fn(data)
      }
      script.src = url;
      $window.document.body.appendChild(script);

    }
  }])



})(angular)