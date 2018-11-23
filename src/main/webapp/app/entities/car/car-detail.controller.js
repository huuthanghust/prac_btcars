(function() {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('CarDetailController', CarDetailController);

    CarDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Car', 'Customer', 'Orderlist'];

    function CarDetailController($scope, $rootScope, $stateParams, previousState, entity, Car, Customer, Orderlist) {
        var vm = this;

        vm.car = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('praBtcarsApp:carUpdate', function(event, result) {
            vm.car = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
