(function (angular) {
    // "use strict";

    // start your ride
    var app=angular.module("myApp",["home",
      "detail",//先引用先匹配路由规则
      "hot",
      "auto-active"]);
    //控制器
app.controller("mainController",["$scope","$location",function($scope,$location){
$scope.query='';





$scope.search=function(){
  //改变URL中的锚点，不在发请求
  $location.url('/search/?'+$scope.query)
}
}]);

})(angular);