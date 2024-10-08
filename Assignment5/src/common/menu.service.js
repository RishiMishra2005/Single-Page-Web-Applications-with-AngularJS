(function () {
    "use strict";

    angular.module('common')
    .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {
      let service = this;
      let user = {};

      service.getCategories = function () {
        return $http.get(ApiPath + '/categories.json').then(function (response) {
          return response.data;
        });
      };
      service.getMenuItems = function (category) {
        var config = {};
        if (category) {
          config.params = {'category': category};
        }

        return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
          return response.data;
        });
      };
      service.getMenuItem = function(shortName) {
          return $http.get(ApiPath + '/menu_items/' + shortName + '.json');
      }
      service.setUser = function(userObj) {
          user = userObj;
      }
      service.getUser = function() {
          return user;
      }
}



})();
