(function() {
    'use strict';

    angular
        .module('praBtcarsApp')
        .factory('RecommendSearch', RecommendSearch);

    RecommendSearch.$inject = ['$resource'];

    function RecommendSearch($resource) {
        var resourceUrl =  'api/_search/recommends/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
