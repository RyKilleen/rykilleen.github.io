app.controller('MainController', ['$scope', '$log', function($scope, $log) { 
  	
  	$scope.header = $('header');
  	$scope.header.toHides = $scope.header.find('.to-hide');
  	$scope.header.logo = $('.header-logo');

  	$scope.header.logo.hovered = false;

  	$scope.header.hideHeader = function() {

  		if ($scope.header.logo.hovered === false) {
  			$scope.header.toHides.each(function(){
				this.style.width = "0px";
			})	
  		}  		
  	};

  	$scope.header.showHeader = function() {

  		$scope.header.toHides.each(function(){
			this.style.width = $(this).data('origWidth');
		});
  	}




  	angular.element(document).ready(function () {
  		var s = $scope;

  		// Get the true width of the displayed elements and place it into data
 		s.header.toHides.each(function(){
 			$(this).data('origWidth' , this.offsetWidth); 			
 			this.style.width = this.offsetWidth;
 		});

 		setTimeout(function() {
 			$scope.header.hideHeader();
 		}, 1000, $scope);


 		$scope.header.logo.on('mouseenter', function() {

 			$scope.header.logo.hovered = true;
 			$scope.header.showHeader();
 		});

 		$scope.header.logo.on('mouseleave', function() {

 			$scope.header.logo.hovered = false;

 			setTimeout(function() {
	 			$scope.header.hideHeader();
	 		}, 1000, $scope);
 		})

    }, $log, $scope);

}]);