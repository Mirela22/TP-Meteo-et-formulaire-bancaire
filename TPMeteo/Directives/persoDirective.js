function persoDirective(){
    return {
        restrict: 'E',
        transclude: true,
        template: '<h1> Accueil du site, Bienvenue <span ng-transclude> </span> </h1>',

        
            };
}


