(function() {
 'use strict';

 angular.module('DIApp',[])
   .controller('DIController',DIController);

   function DIController ($scope ,
                          $filter,
                          $injector ) {
     $scope.name = "edison";

     $scope.upper = function () {
       var upCase = $filter('uppercase');
       $scope.name  = upCase($scope.name);
    };

    console.log($injector.annonate(DIController));
  }

   function AnnonateMe(name,job,blah) {
    return "blah";
  }

    console.log(DIController.toString());
})();
