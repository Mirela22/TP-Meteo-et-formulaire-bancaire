function HomeController($scope, DataService){

    $scope.charged=false;

        $scope.getMeteo=setTimeout(function(){
                var promise = DataService.getMeteo()
                    .then(
                        function(success){
                            console.log(success);
                            $scope.meteo=success;
                            $scope.charged=true;
                        },
                        function(error){
                            console.log("erreur : "+error);
                            $scope.charged=true;
                        }
                    );
                },3500);
                
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