angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(Links) {
    return $location({
      method: 'POST',
      url: $location,
      data: Links
    }).then(function(resp) {
      return resp;
    });
  };


});
