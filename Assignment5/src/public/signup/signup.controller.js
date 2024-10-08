(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        let signup = this;
        signup.firstName = '';
        signup.lastName = '';
        signup.email = '';
        signup.phone = '';
        signup.shortName = '';
        signup.showError = false;
        signup.showMessage = false;

        signup.submit = function(form) {
            signup.showError = false;
            signup.showMessage = false;
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }
            MenuService.getMenuItem(signup.shortName)
                .then(response => {
                    console.log(response)
                    const favoriteItemDetails = response.data;
                    MenuService.setUser({
                        firstName: signup.firstName,
                        lastName: signup.lastName,
                        email: signup.email,
                        phone: signup.phone,
                        shortName: signup.shortName,
                        favoriteItemDetails: favoriteItemDetails
                    });
                    signup.showMessage = true;
                })
                .catch(error => {
                    signup.showError = true;
                })
        }
    }
}());
