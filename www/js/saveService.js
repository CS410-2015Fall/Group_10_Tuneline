angular.module('saveService', [])

  .factory('SaveService', function($cordovaFile, DatabaseService) {
    return {
      save: function(soundbite){

        //soundbite = {
        //  id: null,
        //  type: 'default',
        //  name: '',
        //  datetime: null,
        //  filename: scope.filename,
        //  length: null,
        //  url: null,
        //  tags: null,
        //  photo: '',
        //  author: 'some author id',
        //  location: null
        //};

        var fileName = soundbite.fileName;
        var platform = $cordovaDevice.getPlatform();

        //NOTE TO JON: soundbite.fileName is the full path to a file when I give it to you
        //So you'll need to parse the bit that comes after the slash. It looks like the ending
        //of the files right now will have the directory twice and the extension twice
        if(platform === 'Android'){
          $cordovaFile.moveFile(cordova.file.cache,
                                'files/' + fileName + '.m4a',
                                cordova.file.externalApplicationStorageDirectory,
                                'files/' + fileName + '.m4a');
          $cordovaFile.removeFile(cordova.file.cache, 'files/' + fileName + '.m4a');

        } else if(platform === 'iOS'){
          $cordovaFile.moveFile(cordova.file.cacheDirectory,
                                '/' + fileName + '.wav',
                                cordova.file.dataDirectory,
                                '/' + fileName + '.wav');
          $cordovaFile.removeFile(cordova.file.cacheDirectory, '/' + fileName + '.m4a');

        } else{
          fileName = fileName + '.wav';
        }

        soundbite.filename = fileName;

        databaseService.saveSound(soundbite);

      }
    };
  });
