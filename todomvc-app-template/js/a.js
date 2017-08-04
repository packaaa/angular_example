(function(angular){
var app=angular.module("app",[]);
app.controller("demo",["$scope",function($scope){
  //任务的展示
  $scope.todos=[
{id:1,name:"吃饭",completed:true},
{id:2,name:"睡觉",completed:true},
{id:3,name:"学习",completed:false},
{id:4,name:"喝水",completed:true},
{id:5,name:"打豆豆",completed:true},
  ];
//添加任务

$scope.newTodo="";

$scope.add=function(){
  //判断是否为空
  if (!$scope.newTodo) {return};
  //添加到todos中
  $scope.todos.push({
    id:Math.random(),
    name:$scope.newTodo,
    completed:false
  })
  $scope.newTodo="";


}
//删除元素
$scope.remove=function(id){
//查找id
for (var i = 0; i<$scope.todos.length ; i++) {
if ($scope.todos[i].id==id) {
  $scope.todos.splice(i,1);//删除数组中元素
  return;
};
};



}
//修改内容
$scope.isEditingId=-1;
$scope.edit=function(id){
 $scope.isEditingId=id;
}
$scope.save=function(){
  $scope.isEditingId=-1;
 

}
//任务状态
$scope.selectAll=false;
$scope.toggleAll=function(){
  for (var i =0; i<$scope.todos.length; i++) {
   $scope.todos[i].completed=$scope.selectAll;
  };
  
}
//未完成的功能数
$scope.getActive=function(){
var count=0;
for(var i=0;i<$scope.todos.length;i++){
  var item=$scope.todos[i];
  if (!item.completed) {count++};

}
return count;
}

//清除已完成的任务
$scope.clearAll=function(){
  for(var i=$scope.todos.length-1;i>=0;i--){
    var item=$scope.todos[i];
    if (item.completed) {$scope.todos.splice(i,1)};
  }
}
//切换不同认任务的显示
$scope.isCompleted={}
$scope.active=function(){
  $scope.isCompleted={completed:false}
}
$scope.completed=function(){
    $scope.isCompleted={completed:true}
  

}
//显示所有任务
$scope.all=function(){
    $scope.isCompleted={}
  

}
}])
})(angular)