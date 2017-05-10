angular.module("ModuleAngular",["ngRoute"])
    .service("DataService",DataService)
   .directive("persoDirective",persoDirective)
   .directive("linkdirective",linkdirective)
   .directive("directiveTemperature",directiveTemperature)
   .directive("directiveTemps",directiveTemps)
   .controller("FirstCtrl",FirstCtrl)
  .controller("HomeController",HomeController)
  .controller("SecondCtrl",SecondCtrl)
  .config(function($routeProvider){
    $routeProvider
    .when("/",{
      templateUrl:"home.html",
      controller:"HomeController"
              })
    .when("/page1",{
        templateUrl:"page1.html",
        controller:"HomeController"
      })
      .when("/Page2",{
        templateUrl:"Page2.html",
        controller:"HomeController"
      })
      .when("/Detail",{
        templateUrl:"Detail.html",
        controller:"SecondCtrl"
      })
      .when("/Page3",{
        templateUrl:"Page3.html",
        controller:"HomeController"
      })
     .otherwise({
          redirectTo:"/"
          });
    });


