angular.module('myapp',['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'ourmenu.html'
    }).when('/home',{
        templateUrl:'ang prog/h.html',
        controller:'homectrl'}).when('/home/:first/:last',{
            templateUrl:'ang prog/h.html',
            controller:'homectrl'
        }).when('/contact',{
        templateUrl:'ang prog/m.html'
    })
    .otherwise({redirectTo:'/'})
})
.controller('mainController',function(){

})
.controller('homectrl',function($scope,$routeParams) {
    $scope.message="Hello Welcome"
    if($routeParams.first&&$routeParams.last)
 {
    $scope.person={
       first:$routeParams.first,
       last:$routeParams.last,
    };
 }
 })