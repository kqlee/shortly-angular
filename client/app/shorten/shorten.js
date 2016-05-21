angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {

  $scope.link = {};

  $scope.addLink = function(Links) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: Links
    }).then(function(resp) {
      return resp;
    });
  };

});
