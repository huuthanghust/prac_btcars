(function () {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('CompanyTitleController', CompanyTitleController);

    CompanyTitleController.$inject = ['cars'];

    function CompanyTitleController(cars) {
        var vm = this;

        vm.cars = cars;

    }

})();
