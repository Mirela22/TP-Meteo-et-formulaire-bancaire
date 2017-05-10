function HomeController($scope, DataService){

                $scope.getMeteo=function(){
                var promise = DataService.getMeteo()
                    .then(
                        function(success){
                            console.log(success);
                            $scope.meteo=success;
                        },
                        function(error){
                            console.log("erreur : "+error);
                        }
                    );
                }
                
                $scope.convert = function(kalvin){
                    return (kalvin - 273,15)+"C";
                };

    var temp = 0;
  
   $scope.setPluie = function (valeur) {
         temp = valeur;          
    };    
    
    $scope.getPluie = function () {
           return temp;
   };

            
};