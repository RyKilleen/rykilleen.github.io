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



$scope.spikes = {
  pathsToAnimate : $('path:not(defs path)'),
  setSpikes : function() {
    var paths = $scope.spikes.pathsToAnimate;

    paths.each(function(i, e) {
      e.style.strokeDashoffset = -e.getTotalLength();
      e.style.strokeDasharray = e.getTotalLength()
    });
  },


  playSpikes : function() {
    var timeline = new TimelineMax();
    var paths = $scope.spikes.pathsToAnimate;

    timeline.add([
        TweenLite.to(paths.eq(0), 2, {strokeDashoffset: 0, ease: Expo.easeOut, delay: 0.0})
    ]);
  }
} 

test = {};
test.set = $scope.spikes.setSpikes;
test.play = $scope.spikes.playSpikes;


angular.element(document).ready(function () {
  var s = $scope;

    // Get the true width of the displayed elements and place it into data
    s.header.toHides.each(function(){
      $(this).data('origWidth' , this.offsetWidth); 			
      this.style.width = this.offsetWidth;
    });

    setTimeout(function() {
      $scope.header.hideHeader();
      $scope.spikes.playSpikes();
    }, 1000, $scope);

    s.spikes.setSpikes()
    s.header.logo.on('mouseenter', function() {
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