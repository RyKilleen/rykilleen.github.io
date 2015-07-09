app.controller('MainController', ['$scope', '$log', function($scope, $log) { 
  $scope.title = 'Test'; 
  $scope.promo = "Oh hey";

  angular.element(document).ready(function () {
        $log.debug('Hello world!');
    }, $log);
}]);