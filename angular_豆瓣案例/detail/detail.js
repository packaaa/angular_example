(function(angular){
var app=angular.module('detail',['ngRoute',"myJsonpService"]);
app.config(['$routeProvider',function($routeProvider,){
$routeProvider.when('/details/:id',{
  templateUrl:'./detail/detail.html',
  controller:'detailController'
})
}])

app.controller('detailController',['$scope', "myService","$routeParams",function($scope, myService,$routeParams){
//获取数据
myService.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
$scope.data=data;
$scope.$apply()
})
}])


})(angular)