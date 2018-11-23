(function() {
    'use strict';

    angular
        .module('praBtcarsApp')
        .controller('RecommendDetailController', RecommendDetailController);

    RecommendDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Recommend', 'Car'];

    function RecommendDetailController($scope, $rootScope, $stateParams, previousState, entity, Recommend, Car) {
        var vm = this;

        vm.recommend = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('praBtcarsApp:recommendUpdate', function(event, result) {
            vm.recommend = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
