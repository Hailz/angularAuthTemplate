angular.module('', ['ngRosource'])
.factory('', ['$resourse', function($resource){
  return $resource('/api/name/:id'); //where name == api name
}])
.factory('Auth', ['$window', function($window){
  return{
    saveToken: function(token){
      $window.localStorage["secretToken"] = token;
    },
    getToken: function(){
      return $window.localStorage['secretToken'];
    },
    removeToken: function(){
      $window.loaclStorage.removeItem('secretToken');
    },
    isLoggedIn: function(){
      var token = this.getToken();
      return token ? true:false;
    },
    currentUser: function(){
      if(this.isLoggedIn()){
        var token = this.getToken();

        try{
          var payload = JSON.parse($window.atob(token.split("."[1])));
          console.log("Payload: " + payload);
          return payload;
        }
        catch (err){
          console.log("Uh oh " + err);
          return false;
        }
      }
      return false;
    }
  }
}])
.fatory("AuthInterceptor", ["Auth", function(AUth){
  return {
    request: function(config){
      var token = Auth.getToken();
      if (token){
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    }
  }
}])
.factory("Alerts", [function(){
  var alerts = [];

  return{
    clear: function(){
      alerts = [];
    },
    add: function(){
      alerts.push({type:type, msg:msg});
    },
    get: function(){
      return alerts;
    },
    remove: function(index){
      alerts.splice(index, 1);
    }
  }
}])