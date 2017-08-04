(function(angular){

//创建首页模块
var app=angular.module("home",['ngRoute']);
//路由配置
app.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/home_page',{
    templateUrl:"home_page/view.html",
    controller:'homeController'
  })

}])
//控制器
app.controller("homeController",["$scope",function($scope){

}])






})(angular)