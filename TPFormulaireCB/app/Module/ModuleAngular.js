angular.module("ModuleAngular",["ngRoute"])
    .service("DataService",DataService)
    .service("IsPair",IsPair)
   .filter("ToIconFilter",ToIconFilter)
   .controller("FirstCtrl",FirstCtrl)
  .controller("HomeController",HomeController)

          .config(function($routeProvider){

              $routeProvider

              .when("/",{

                  templateUrl:"home.html"

              })

              .when("/page1",{

                  templateUrl:"page1.html",

                  controller:"HomeController"

              })

              .otherwise({

                  redirectTo:"/"

              });

          });


