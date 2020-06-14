//
//
// (function() {
//  'use strict';
//   //  console.log(DIController.toString());
//
//  angular.module('DIApp',[])
//    // .controller('DIController',['$scope' , '$filter',DIController]);
//    .controller('DIController',DIController);
//    DIController.$inject=['$scope','$filter'];
//    function DIController ($scope , $filter) {
//      $scope.name = "edison";
//
//      $scope.upper = function () {
//        var upCase = $filter('uppercase');
//        $scope.name  = upCase($scope.name);
//     };
//
//   //  console.log($injector.annonate(DIController));
//   }
//
//   // function AnnonateMe(name,job,blah) {
//   //  return "blah";
//   //}
//
// })();
!function(){"use strict";function e(e,n){e.name="edison",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
