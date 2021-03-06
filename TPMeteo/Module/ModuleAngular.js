angular.module("ModuleAngular",["ngRoute"])
  .filter("filtrepluie",filtrepluie)
   .service("DataService",DataService)
   .directive("persoDirective",persoDirective)
   .directive("linkdirective",linkdirective)
   .directive("directiveTemperature",directiveTemperature)
   .directive("directiveTemps",directiveTemps)
   .controller("FirstCtrl",FirstCtrl)
  .controller("HomeController",HomeController)
  .controller("SecondCtrl",SecondCtrl)
  .controller("ControlVille",ControlVille)
  .config(function($routeProvider){
    $routeProvider
    .when("/Template/",{
      templateUrl:"Template/home.html",
      controller:"HomeController"
              })
    .when("/Template/page1",{
        templateUrl:"Template/page1.html",
        controller:"HomeController"
      })
      .when("/Template/Formulaire",{
        templateUrl:"Template/Formulaire.html",
        controller:"ControlVille"
      })
      .when("/Template/Page2",{
        templateUrl:"Template/Page2.html",
        controller:"HomeController"
      })
      .when("/Template/Detail",{
        templateUrl:"Template/Detail.html",
        controller:"SecondCtrl"
      })
      .when("/Template/Page3",{
        templateUrl:"Template/Page3.html",
        controller:"HomeController"
      })
     .otherwise({
          redirectTo:"/Template/"
          });
    });


