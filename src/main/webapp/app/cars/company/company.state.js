(function () {
    'use strict';

    angular
        .module('praBtcarsApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('companyParent', {
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
                'sidebar@companyParent': {
                    templateUrl: 'app/cars/mutual/mutual-sidebar.html',
                }
            }
        })
        .state('company', {
            parent: 'companyParent',
            url: '/company/:company',
            views: {
                'content@companyParent': {
                    templateUrl: 'app/cars/company/company-content.html',
                    controller: 'CompanyContentController',
                    controllerAs: 'vm'
                },
                'title@companyParent': {
                    templateUrl: 'app/cars/company/company-title.html',
                    controller: 'CompanyTitleController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                cars: function (Car, $stateParams, $q) {
                    let cars = Car.query({ company: $stateParams.company });
                    return $q.resolve(cars.$promise).then(function (result) {
                        return result;
                    });
                }
            }
        });
    }

})();
