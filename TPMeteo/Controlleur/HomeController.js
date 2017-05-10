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
                },1500);
                
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

   var key = 0;
  
   $scope.setKey = function (valeur) {
         key = valeur;          
    };    
    
    $scope.getKey = function () {
           return key;
   };

            
};