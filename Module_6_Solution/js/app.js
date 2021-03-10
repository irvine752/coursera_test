(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenuItems = "";
    $scope.messageToDisplay = "";
    $scope.processingComplete = false;


    $scope.checkInput = function () {
      if ($scope.lunchMenuItems.trim().length === 0) {

         $scope.myObj = {
          "color" : "red",
          "border-color": "red"
         }
        $scope.emptyInput = true;
        
      } else {

        $scope.myObj = {
          "color" : "green",
          "border-color": "green"
        }

        $scope.processingComplete = true;
        $scope.emptyInput = false;

        var menuItems = $scope.lunchMenuItems.split(',');

        for (var i = menuItems.length - 1; i >= 0; i--) {
          if(menuItems[i].trim().length === 0){
            menuItems.splice(i, 1)
          }
        }
        
        if (menuItems.length > 3) {
          $scope.messageToDisplay = "Too much!";
        } else {
           $scope.messageToDisplay = "Enjoy!";
        }
      }
    };
  }
})();