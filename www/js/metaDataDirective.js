angular.module('metaDataForm', [])
.directive('metaData', function() {
    return {
        // can be used as attribute or element
        restrict: 'AE',
        // which markup this directive generates
        template: '<button>-</button>' +
                  '<div>0</div>' +
                  '<button>+</button>'
    };
});
//http://blog.revolunet.com/blog/2013/11/28/create-resusable-angularjs-input-component/