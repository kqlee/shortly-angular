angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {links: []};
  
  Links.getAll(function (value) {
    $scope.data.links.push(value);
  });

});
