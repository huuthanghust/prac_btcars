(function () {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('AllContentController', AllContentController);

    AllContentController.$inject = ['$scope', 'cars'];

    function AllContentController($scope, cars) {
        var vm = this;
        vm.cars = cars;

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

})();
