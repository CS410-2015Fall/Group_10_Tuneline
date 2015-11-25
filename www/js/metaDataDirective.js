angular.module('metaDataFormProvider', [])
.directive('metaDataForm', ['$rootScope','$cordovaCamera','$cordovaGeolocation','$cordovaInAppBrowser',
  function($rootScope,$cordovaCamera,$cordovaGeolocation,$cordovaInAppBrowser) {
    return {
        // can be used as attribute or element
        restrict: 'AE',
        scope: {
          soundbite: '=ngModel'
        },
        // which markup this directive generates
        template: '<div class="list list-inset">' +
          '<label class="item item-input item-select">' +
            '<div class="input-label">' +
              'Or Import Media From: ' +
            '</div>' +
            '<select ng-model="targetUrl" ng-change="openBrowser(targetUrl)">' +
              '<option value="http://www.youtube.com">Youtube</option>' +
              '<option value="http://www.soundcloud.com">SoundCloud</option>' +
            '</select>' +
          '</label>' +
          '<label class="item item-input">' +
            '<input type="text" placeholder="Soundbite Name" ng-model="soundbite.name"/>' +
          '</label>' +
          '<label class="item item-input">' +
            '<input type="date" placeholder="Date" ng-model="dateValue" ng-change="createDatetime()">' +
            '<input type="time" placeholder="Time" ng-model="dateValue" ng-change="createDatetime()">' +
          '</label>' +
          '<button class="button icon-left ion-camera button-full button-positive" ng-click="takePicture()">' +
            'Add Photo' +
          '</button>' +
          '<img src="{{soundbite.photo}}" ng-if="soundbite.photo"/>' +
          '<label class="item item-input">' +
            '<input type="url" placeholder="Media URL" ng-model="soundbite.url"/>' +
          '</label>'+
          '<label class="item item-input">' +
            '<textarea rows="3" placeholder="Tags" ng-model="soundbite.tags"/>' + 
          '</label>' +          
        '</div>',

        link: function(scope, iElement, iAttrs) {

            var now = new Date();

            scope.dateValue = now;
            scope.timeValue = now;

            scope.soundbite = {
              id: null,
              type: 'default',
              name: '',
              datetime: null,
              fileName: '',
              mediaLength: 0,
              url: 'http://',
              tags: '',
              photo: '',
              author: 'some author id',
              position: {}
            };

            scope.createDatetime = function(){
              var date = new Date(scope.dateValue);
              scope.soundbite.datetime = date;
              return date;
            };

            scope.takePicture = function(){
              var options = {
                  quality: 50,
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: true,
                  encodingType: Camera.EncodingType.JPEG,
                  targetWidth: 500,
                  targetHeight: 500,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:true
                };
              $cordovaCamera.getPicture(options).then(function(imageData) {
                scope.soundbite.photo = imageData;
              }, function(err) {
                // error
              });
            };

            scope.targetUrl;
            scope.openBrowser = function(targetUrl){
              $cordovaInAppBrowser.open(targetUrl,'_blank',{});    
            };

            $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
              // insert Javascript via code / file
              $cordovaInAppBrowser.executeScript({
                code: 'window.location.href;'
              })
              .then(fillUrl);
            });

            var fillUrl = function(siteUrl){
              scope.soundbite.url = siteUrl;
              console.log('*****************Site url:'+siteUrl);
            };

            scope.createDatetime();
            
            
        }
    };
}]);
//http://blog.revolunet.com/blog/2013/11/28/create-resusable-angularjs-input-component/