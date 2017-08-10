var app = angular.module("redditApp", []);

app.controller("redditController", function($scope, $http){
  $http.get("https://www.reddit.com/r/aww/.json").then(function(response){
    $scope.posts = response.data.data.children;
    //console.log($scope.posts);
  });
});
