function ControlVille($scope, DataService){
    

    $scope.lattitude = 0;
    $scope.longitude = 0;
    $scope.lattitude2 = 0;
    $scope.longitude2 = 0;
    $scope.lattitude3 = 0;
    $scope.longitude3 = 0;
    $scope.URL = "http://www.infoclimat.fr/public-api/gfs/json?_ll="; //premiere partie URL
   
    $scope.URLville1 = 0;
    $scope.URLville2 = 0;
    $scope.URLville3 = 0;
    //deuxieme partie URL
    $scope.URL2 = "&_auth=VU9TRFQqVHZRfFZhAnRWf1A4DjtdK1RzAn4FZgFkVisGbQRlDm5XMV4wA34BLlFnWHUHZAoxCDgGbQB4DH4AYVU%2FUz9UP1QzUT5WMwItVn1Qfg5vXX1UcwJgBWIBZVYrBmQEaQ5tVyteMANhAThRe1hqB2MKMggvBnoAZgxlAGpVNVM%2BVDdUMFE4Vj0CNVZ9UHwOa11rVGwCMwVhAWlWNQZsBGEObVc2XjMDYQE5UXtYbgdhCjIINwZkAGAMYwBqVSlTKFROVEVRI1Z0AnBWN1AlDnNdN1QyAjU%3D&_c=ff6501b3a1976939228fec1d4f807d8a";
    $scope.haveResult = false;

    $scope.listeVille=[]; 
  
    $scope.search=function(){
       
       $scope.listeVille.push( 
            {'lattitude':$scope.lattitude, 'longitude':$scope.longitude, 
            'lattitude2':$scope.lattitude2, 'longitude2':$scope.longitude2 , 
             'lattitude3':$scope.lattitude3, 'longitude3':$scope.longitude3} );

            $scope.URLville1 = $scope.URL+$scope.lattitude+','+$scope.longitude+$scope.URL2;
            $scope.URLville2 = $scope.URL+$scope.lattitude2+','+$scope.longitude2+$scope.URL2;
            $scope.URLville3 = $scope.URL+$scope.lattitude3+','+$scope.longitude3+$scope.URL2;
            console.log($scope.URLville1);
            console.log($scope.URLville2);
            console.log($scope.URLville3);
 
            $scope.haveResult = true;

                };

     $scope.getMeteoVille= function(){
        DataService.getMeteoVille($scope.URLville1)
                    .then(
                        function(success){
                            console.log(success);
                            $scope.meteoVille=success;
                        },
                        function(error){
                            console.log("erreur : "+error);
                        }
                    );
     }

     $scope.getMeteoVille2= function(){
        DataService.getMeteoVille($scope.URLville2)
                    .then(
                        function(success){
                            console.log(success);
                            $scope.meteoVille=success;
                        },
                        function(error){
                            console.log("erreur : "+error);
                        }
                    );
     }

     $scope.getMeteoVille3= function(){
        DataService.getMeteoVille($scope.URLville3)
                    .then(
                        function(success){
                            console.log(success);
                            $scope.meteoVille=success;
                        },
                        function(error){
                            console.log("erreur : "+error);
                        }
                    );
     }

    $scope.unit=false;

    $scope.toggle = function toggle(){
      $scope.unit = !($scope.unit);
    };

    $scope.convert = function(kalvin){
                    return (kalvin - 273,15)+"C";
                };
            
                        
};