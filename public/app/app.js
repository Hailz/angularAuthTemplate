var app = angular,module( ,[]); //fill this stuff in

app.config([
  '$stateProvider',
  "$urlRouterProvider",
  "$locationProvider",
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $url.RouterProvider.otherwise('/404');

    $stateProvider

  .state('home',{
    url: '/',
    templateUrl: "app/views/", //whatever the home page is called
    controller: 'HomeCtrl' //appropriate controller name goes here
  })
  //.state('',{}) continue on for all da views
  }])