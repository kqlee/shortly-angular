angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {links: []};
  //$scope.data.links = ['1', '2', '3'];

  Links.getAll(function (value) {
    $scope.data.links.push(value);
  });

});
