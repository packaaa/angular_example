(function(angular){
  var app=angular.module("hot",["ngRoute","myJsonpService"]);
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/:movieType/:page?',{
      templateUrl:"in_theaters/hot.html",
      controller:'hotController'
    })
  }])
  //控制器
  app.controller("hotController",["$scope",
    "$http",
    "$routeParams",
    "$route",//获取url中锚点值
    "myService",
    function($scope,$http,$routeParams,$route,myService){//console.log($routeParams)

      $scope.show=true;//显示加载动画
      $scope.pageSize=5;//每页多少条
      $scope.page=($routeParams.page||1)-0;//第几页
      var start=$scope.pageSize*($scope.page-1)//从第几页开始
//豆瓣中不允许使用“.”,使用自己封装的jsonp服务
myService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType,
  {start:start,count:$scope.pageSize,q:$routeParams.q},function(data){

    //在异步数据模型赋值angular不会知道，需要添加$scope.$apply()
    $scope.data=data;
    //计算出总页数
    $scope.totalPage=Math.ceil($scope.data.total/$scope.pageSize)

    $scope.show=false;//隐藏加载动画
    $scope.$apply()
  })
//下一页、上一页
      $scope.getPage=function(nowPage){

 if (nowPage<=0||nowPage> $scope.totalPage) {return};
        //改变url中参数部分  page:
        $route.updateParams({page:nowPage})
      }

    //发送数据请求
/*$http.get('./in_theaters/data.json')
.then(function(res){
  $scope.data=res.data
})*/
/*$http.jsonp('https://api.douban.com/v2/movie/in_theaters',{
  jsonCallbackParam:'callback'
}
  ).then(function(res){
    console.log(res)
  })*/
  }])
})(angular)