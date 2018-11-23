'use strict';

describe('Controller Tests', function() {

    describe('Car Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockCar, MockCustomer, MockOrderlist;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockCar = jasmine.createSpy('MockCar');
            MockCustomer = jasmine.createSpy('MockCustomer');
            MockOrderlist = jasmine.createSpy('MockOrderlist');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Car': MockCar,
                'Customer': MockCustomer,
                'Orderlist': MockOrderlist
            };
            createController = function() {
                $injector.get('$controller')("CarDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'praBtcarsApp:carUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
