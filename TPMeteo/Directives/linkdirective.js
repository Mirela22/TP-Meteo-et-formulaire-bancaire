function linkdirective(){

    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=linkdirectiveTitle',
                number: '@number'},
       
        template: '<div>' +
        '<div class="title" ng-click="toggle()"> Cliquer ici pour voir la {{title}} {{number}} :</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '<div ng-show="showMe">{{resultat}}</div>'+'</div>',
        

        link: function(scope, element, attrs){
            

            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            };

            function factorielle (number) {
                return number <= 1 ? 1 : number * factorielle(number-1);
            }

            scope.resultat=factorielle(attrs.number);

        }
    };
}