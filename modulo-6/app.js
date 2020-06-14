

(function() {
 'use strict';
  //  console.log(DIController.toString());

 angular.module('MsgApp',[])
   .controller('MsgController',MsgController);
   MsgController.$inject=['$scope'];
   function MsgController ($scope) {
     $scope.name = "Error 11-11";

    $scope.sayMessage= function () {
      return "Ora error 1145";
    } ;
  }
})();
