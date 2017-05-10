var DataService = function($q,$http){
return {
    getTable:function(){
        return [
            {
            info: 'oussama',
            sens: 'Credit',
            somme: 300,
            },
            {
            info: 'edouard',
            sens: 'Debit',
            somme: 100,
        },
        {
            info: 'maria',
            sens: 'Debit',
            somme: 125,
            },
        ];
    },
    getMeteo:function(){
        var deferred=$q.defer();
        $http({
            method: "GET",
            url:"http://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=VU9TRFQqVHZRfFZhAnRWf1A4DjtdK1RzAn4FZgFkVisGbQRlDm5XMV4wA34BLlFnWHUHZAoxCDgGbQB4DH4AYVU%2FUz9UP1QzUT5WMwItVn1Qfg5vXX1UcwJgBWIBZVYrBmQEaQ5tVyteMANhAThRe1hqB2MKMggvBnoAZgxlAGpVNVM%2BVDdUMFE4Vj0CNVZ9UHwOa11rVGwCMwVhAWlWNQZsBGEObVc2XjMDYQE5UXtYbgdhCjIINwZkAGAMYwBqVSlTKFROVEVRI1Z0AnBWN1AlDnNdN1QyAjU%3D&_c=ff6501b3a1976939228fec1d4f807d8a",
            cache:false
        }).then(function success(response){
            deferred.resolve(response.data);
        },function success(error){
            deferred.reject(error.status);
        });
    return deferred.promise;
    }
};


}