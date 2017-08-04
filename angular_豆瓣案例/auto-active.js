//创建自定义指令
(function(angular) {
  //创建模块
  var app = angular.module("auto-active", [])
    //创建自定义指令
  app.directive("autoActive", ["$location", function($location) { //需驼峰命名法
    return {
      link: function(scope, element, arrributes) { //arrributes是自定义指令所在标签属性集合
        element.on('click', function() {
          //清除所有样式
          element.parent().children().removeClass('active');
          //添加当前样式
          element.addClass('active');

        })
        scope.loca = $location;//获取URL中的值
        //添加监视
        scope.$watch('loca.url()', function(now, old) {
       
          var hash = element.find('a').attr('href').substr(1);
          if (now.startsWith(hash)) {
            //清除所有样式
            element.parent().children().removeClass('active');
            //添加当前样式
            element.addClass('active');
          };
        })

      }
    }
  }])
})(angular)