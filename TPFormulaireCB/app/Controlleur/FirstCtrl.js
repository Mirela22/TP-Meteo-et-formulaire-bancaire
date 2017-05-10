 function FirstCtrl ($scope, IsPair, DataService ){
               //$scope.view=true;
                $scope.haveResult = false;
                $scope.items = DataService.getTable();
                $scope.search='';
                $scope.meteo={};
                $scope.listeOp=[  
                    
                ];           
                      

                $scope.validate=function(){
                    $scope.listeOp.push( 
                        {'sens':$scope.sens, 'info':$scope.info, 'somme':$scope.somme, 'delete': $scope.delete});
                        $scope.sens='';
                        $scope.info='';
                        $scope.somme='';
                        $scope.delete='';
                        $scope.haveResult = true;
                };

                $scope.removeRow=function($index){
                    $scope.listeOp.splice( $index, 1);		
                };

                $scope.toggle=function(){
                    $scope.view=!$scope.view;		
                };

                $scope.ispair=function(somme){
                    IsPair.IsNumberPair(somme);
                }


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
                
         }             