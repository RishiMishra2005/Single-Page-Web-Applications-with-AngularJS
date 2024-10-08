(function() {
    'use strict';

    angular.module('public')
        .controller('MyInfoController',MyInfoController)

    MyInfoController.$inject = ['user','ApiPath'];
    function MyInfoController(user,ApiPath) {
        let myinfo = this;

        myinfo.isUserRegistered = !(Object.keys(user).length === 0 && user.constructor === Object);
        myinfo.ApiPath = ApiPath;
        myinfo.user = user;
    }
}());
