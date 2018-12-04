(function () {
    'use strict';

    angular
        .module('praBtcarsApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('allParent', {
            parent: 'app',
            abstract: true,
            data: {
                authorities: [],
                pageTitle: 'BT Cars - Best Choice!'
            },
            views: {
                'content@': {
                    templateUrl: 'app/cars/mutual/mutual.html',
                },
                'sidebar@allParent': {
                    templateUrl: 'app/cars/mutual/mutual-sidebar.html',
                }
            }
        })
        .state('all', {
            parent: 'allParent',
            url: '/cars',
            views: {
                'content@allParent': {
                    templateUrl: 'app/cars/all/all-content.html',
                    controller: 'AllContentController',
                    controllerAs: 'vm'
                },
                'title@allParent': {
                    templateUrl: 'app/cars/all/all-title.html',
                    controller: 'AllTitleController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                cars: function (Car, $q) {
                    let cars = Car.query();
                    return $q.resolve(cars.$promise).then(function (result) {
                        return result;
                    });
                }
            }
        });
    }

})();
