angular.module('app.services', [])
 

.service('DocTGS', ['$q', '$http', function($q,$http){
    
    // var url_api = 'https://sheetsu.com/apis/v1.0su/b96b7b26094d';
    // var url_api = '  ttps://api.myjson.com/bins/n3ayw';   no funciona por politica con respecto a cors
    var url_api = 'https://jsonbin.io/5c376f8281fe89272a88c69e'; 
    
    var array = {
        all: function(){
            var consulta = $q.defer();
            
            $http.get(url_api).then(function(resp){
                console.log(resp)
                //consulta.resolve(resp.data);
            });
            return consulta.promise;
        }
    }
    
    return array
}]);