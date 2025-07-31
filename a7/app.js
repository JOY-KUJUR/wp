var app = angular.module('studentApp', []);

app.controller('StudentController', function($scope) {
  $scope.students = [];

  $scope.newStudent = {};

  $scope.addStudent = function() {
    $scope.students.push(angular.copy($scope.newStudent));
    $scope.newStudent = {}; // Clear form
  };

  $scope.removeStudent = function(index) {
    $scope.students.splice(index, 1);
  };
});
