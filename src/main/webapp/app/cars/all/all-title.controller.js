(function () {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('AllTitleController', AllTitleController);

    AllTitleController.$inject = ['cars'];

    function AllTitleController(cars) {
        var vm = this;

        vm.cars = cars;

    }

})();
