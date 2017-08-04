(function (angular) {
'use strict';
var app=angular.module("app",[]);
app.controller("demo",["$scope",function($scope){
$scope.todos=[
  {id:1,name:"吃饭",completed:false},
  {id:2,name:"睡觉",completed:false},
  {id:3,name:"学习",completed:true},
  {id:4,name:"代码",completed:false}
];

$scope.ent=function(){
  //空格返回
  if (!$scope.newTodo) {
    return
  };
//添加到数组
$scope.todos.push({
  id:Math.random(),
  name:$scope.newTodo,
  completed:false
});
//清空搜索框
$scope.newTodo="";

}
$scope.remove=function(id){
for (var i = 0; i < $scope.todos.length; i++) {
  if ($scope.todos[i].id==id) {
$scope.todos.splice(i,1);
return;
  };  
};
}
//双击修改内容
$scope.isEditingId=-1;
$scope.add=function(id){
  $scope.isEditingId=id
}
//改变文本编辑状态
$scope.save=function(){
  $scope.isEditingId=-1;

};


//批量切换任务状态
$scope.selectAll=false;
$scope.toggleAll=function(){
  for (var i = 0; i < $scope.todos.length; i++) {
    $scope.todos[i].completed=$scope.selectAll
  };
};
//显示未完成的个数

$scope.count=function(){
  var num=0;

  for (var i = 0; i < $scope.todos.length; i++){

   if (!$scope.todos[i].completed) {
    num++
    console.log(num)
   };

  };

  return num;
}

//清除所有已完成的任务
$scope.clearAll=function(){
  
  for (var i =  $scope.todos.length-1; i >=0; i--) {
   if ( $scope.todos[i].completed) {
    $scope.todos.splice(i,1)
   };
  };
}
//点击显示所有
$scope.check={};
/*$scope.all=function(){
  $scope.check={};
}
//点击显示已完成

$scope.Completed=function(){
  $scope.check={completed:true};
}
//点击显示未完成

$scope.Active=function(){
  $scope.check={completed:false};
}*/



$scope.loca=$location;
$scope.$watch("loca.url()",function(new,old){
switch(now){
  case "/activ":$scope.check=={completed:true}
  break;
}
})
}])

})(angular)
