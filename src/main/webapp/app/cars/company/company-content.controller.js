(function () {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('CompanyContentController', CompanyContentController);

    CompanyContentController.$inject = ['$scope', '$stateParams', 'cars'];

    function CompanyContentController($scope, $stateParams, cars) {
        var vm = this;
        vm.cars = cars;

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

})();
