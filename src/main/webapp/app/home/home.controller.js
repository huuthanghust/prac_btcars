(function() {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'Car'];

    function HomeController($scope, Principal, LoginService, $state, Car) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });
        vm.hot = [];
        vm.random = [];
        vm.new = [];

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }

        function register() {
            $state.go('register');
        }
        Car.query({ category: 'hot' }, function(result) {
            vm.hot = result;
        }, function(error) {
            console.log('Error while getting hot cars');
        });

        Car.query({ category: 'new' }, function(result) {
            vm.new = result;
        }, function(error) {
            console.log('Error while getting new cars');
        });

        Car.query({ category: 'random' }, function(result) {
            vm.random = result;
        }, function(error) {
            console.log('Error while getting random cars');
        });
    }
})();