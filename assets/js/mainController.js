app.controller('MainController', ['$scope', '$log', function($scope, $log) { 
  	
  	$scope.header = $('header');
  	$scope.header.toHides = $scope.header.find('.to-hide');
  	$scope.header.logo = $('.header-logo');

  	angular.element(document).ready(function () {
  		var s = $scope;
 		s.header.toHides.each(function(){
 			$(this).data('origWidth' , this.offsetWidth);
 			
 			this.style.width = this.offsetWidth;
 		});

 		setTimeout(function() {
 			$scope.header.toHides.each(function(){
 				this.style.width = "0px";
 			})
 		}, 1000, $scope);

 		$scope.header.logo.on('mouseenter', function() {
 			s.header.toHides.each(function(){
 				this.style.width = $(this).data('origWidth');
 			});
 		})

    }, $log, $scope);

}]);