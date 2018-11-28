(function(){
	'use strict';
	angular
	.module('praBtcarsApp')
	.config(['$stateProvider', function config($stateProvider){
		$stateProvider.state('about', {
			parent: 'app',
			url: '/about',
			data: {
				authorities: [],
				pageTitle: 'About us'
			},
			views: {
				'content@': {
					templateUrl: 'app/info/about.html'
				}
			}
		});
	}
	]);
}
})();

