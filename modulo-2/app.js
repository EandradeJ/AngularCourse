(function () {
'use strict';
var   x="hello";
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function($scope) {
  $scope.name="EdisonAndrade";
  $scope.sayHello= function() {
    return "Hello Coursera"
  };
});
})();
