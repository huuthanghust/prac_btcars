(function() {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('CarDialogController', CarDialogController);

    CarDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Car', 'Customer', 'Orderlist'];

    function CarDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Car, Customer, Orderlist) {
        var vm = this;

        vm.car = entity;
        vm.clear = clear;
        vm.save = save;
        vm.customers = Customer.query();
        vm.orderlists = Orderlist.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.car.id !== null) {
                Car.update(vm.car, onSaveSuccess, onSaveError);
            } else {
                Car.save(vm.car, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('praBtcarsApp:carUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
