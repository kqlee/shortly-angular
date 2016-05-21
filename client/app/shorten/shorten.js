//var utils = require('./server/config/utils.js');

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {

  $scope.link = {};

  // $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  // $scope.isValidURL = function(url) {
  //   console.log('url', url);
  //   return url.match($scope.rValidUrl);
  // };

  $scope.addLink = function(Links) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: Links}
    }).then(function(resp) {
      console.log('resp', resp);
      return resp;
    }, function (err) {
      console.log('err is', err);
    });
  };

});
