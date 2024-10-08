(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkItems = function() {
            if ($scope.items.trim().length === 0) {
                $scope.emptyItem = true;
                $scope.validItem = false;
            } else {
                var arrayitems = $scope.items.split(',');
                var arrayitemsWithoutEmptys = arrayitems.filter(function(v) {
                    return v.trim() !== ""; // NOT considering an empty item
                });
                if(arrayitemsWithoutEmptys.length === 0){
                    $scope.emptyItem = true;
                    $scope.validItem = true;

                }else{
                    $scope.emptyItem = false;
                    $scope.checked = true;
                    if (arrayitemsWithoutEmptys.length <= 3) {
                        $scope.message = 'Enjoy!';
                    } else {
                        $scope.message = 'Too much!';
                    }

                }               
            }
        };
    }
})();