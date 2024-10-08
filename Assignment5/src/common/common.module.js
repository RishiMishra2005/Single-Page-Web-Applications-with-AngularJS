(function() {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://fathomless-thicket-75994.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
