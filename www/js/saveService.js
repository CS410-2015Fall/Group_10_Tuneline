angular.module('saveService', [])

  .factory('SaveService', function($cordovaFile, $cordovaDevice) {
    return {
      save: function(soundbite){
        //
        ////console.log("$%$%$%$%$%$%$% inside SAVE");
        ////soundbite = {
        ////  id: null,
        ////  type: 'default',
        ////  name: '',
        ////  datetime: null,
        ////  fileName: scope.filename,
        ////  length: null,
        ////  url: null,
        ////  tags: null,
        ////  photo: '',
        ////  author: 'some author id',
        ////  location: null
        ////};
        //
        //var fileName = soundbite.fileName;
        ////var platform = $cordovaDevice.getPlatform();
        ////
        ////console.log("#$#$#$: " + fileName);
        ////
        ////
        ////console.log("1" + $cordovaFile.cacheDirectory);
        ////console.log("1.5" + cordova.file.cacheDirectory);
        ////console.log("2" + cordova.file.tempDirectory);
        ////
        ////console.log("Type: " + typeof(cordova.file.tempDirectory));
        //
        //
        ///* First way
        //window.resolveLocalFileSystemURL(
        //  fileUri,
        //  function(fileEntry){
        //    newFileUri  = cordova.file.dataDirectory + "images/";
        //    oldFileUri  = fileUri;
        //    fileExt     = "." + oldFileUri.split('.').pop();
        //
        //    newFileName = guid("car") + fileExt;
        //    window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
        //      function(dirEntry) {
        //        // move the file to a new directory and rename it
        //        fileEntry.moveTo(dirEntry, newFileName, successCallback, errorCallback);
        //      },
        //      errorCallback);
        //  },
        //  errorCallback);
        //
        //  */
        //
        //
        ///* Second way
        //resolveLocalFileSystemURL('cdvfile://localhost/temporary/path/to/file.mp4', function(entry) {
        //  var nativePath = entry.toURL();
        //  console.log('Native URI: ' + nativePath);
        //  document.getElementById('video').src = nativePath;
        //*/
        //
        //
        //
        ///*
        //window.resolveLocalFileSystemURL(loc, function(d) {
        //  window.resolveLocalFileSystemURL($scope.sound.file, function(fe) {
        //    fe.copyTo(d, filename, function(e) {
        //      console.log('success inc opy');
        //      console.dir(e);
        //      $scope.sound.file = e.nativeURL;
        //      $scope.sound.path = e.fullPath;
        //
        //      Sounds.save($scope.sound).then(function() {
        //        $ionicHistory.nextViewOptions({
        //          disableBack: true
        //        });
        //        $state.go("home");
        //      });
        //
        //    }, function(e) {
        //      console.log('error in coipy');console.dir(e);
        //    });
        //  }, function(e) {
        //    console.log("error in inner bullcrap");
        //    console.dir(e);
        //  });
        //
        //  */
        //
        //
        ////var pers = LocalFileSystem.PERSISTENT;
        ////console.log("persType: " + typeof(pers));
        //
        ////var wind = window.resolveLocalFileSystemURL(cordova.file.documentsDirectory,
        ////  function(entry){
        ////    console.log("1within lfsu: " + JSON.stringify(entry));
        ////    console.log("within lfsu type: " + typeof(entry.fileSystem));
        ////    console.log("app name: " + entry.name);
        ////    var f1 = $cordovaFile.checkFile(entry.fullPath, fileName );
        ////    console.log("^^&&^&^&^&^^^^^^^^^&^&^&^&^:" + JSON.stringify(f1));
        ////
        ////
        ////    var fullpath = cordova.file.tempDirectory;
        ////    //var med = new Media(fileName);
        ////    //var med = new Media(fileName);
        ////    //var med1 = new Media("documents:///tmp/" + fileName);
        ////    //var med2 = new Media("documents://tmp/" + fileName);
        ////    var hailmarry = new Media(fullpath + fileName);
        ////
        ////    //var med3 = new Media("documents:/tmp/" + fileName);
        ////    //var med4 = new Media("documents:tmp/" + fileName);
        ////    //var med5 = new Media("cdvfile:///tmp/" + fileName);
        ////    //var med6 = new Media("cdvfile://tmp/" + fileName);
        ////    //var med7 = new Media("cdvfile:/tmp/" + fileName);
        ////    //var med8 = new Media("cdvfile:tmp/" + fileName);
        ////
        ////    //med.play();
        ////    //med1.play();
        ////    //med2.play();
        ////    //med3.play();
        ////    //med4.play();
        ////    //med5.play();
        ////    //med6.play();
        ////    //med7.play();
        ////    //med8.play();
        ////    hailmarry.play();
        ////  }, function(error){
        ////    console.log("within lfsuERROR: " + JSON.stringify(error));
        ////    console.log("within lfsu type ERROR: " + typeof(error));
        ////
        ////  });
        //
        //
        //
        //window.resolveLocalFileSystemURL(cordova.file.documentsDirectory, function(d){
        //  console.log("first");
        //
        //  window.resolveLocalFileSystemURL(fileName, function(fe){
        //    console.log("second");
        //    fe.copyTo(d, fileName, function(e) {
        //      console.log("FLKKKJJ");
        //      console.log("*&*&*& copy success nativeURL: " + e.nativeURL + " fullPath: " + e.fullPath);
        //      var med = new Media(e.nativeURL);
        //      med.play();
        //
        //    }, function (e) {
        //      console.log("Error in copy");
        //      console.log("FLKKKJJ");
        //    });
        //  });
        //  }, function(error){
        //    console.log("within lfsuERROR: " + JSON.stringify(error));
        //    console.log("within lfsu type ERROR: " + typeof(error));
        //  console.log("FLKKKJJ");
        //
        //
        //
        //  });
        //
        //
        //
        ////var wind = window.resolveLocalFileSystemURL(cordova.file.documentsDirectory,
        ////  function(entry){
        ////    console.log("2within lfsu: " + JSON.stringify(entry));
        ////    console.log("within lfsu type: " + typeof(entry));
        ////  }, function(error){
        ////    console.log("within lfsuERROR: " + JSON.stringify(error));
        ////    console.log("within lfsu type ERROR: " + typeof(error));
        ////
        ////  });
        ////var wind = window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
        ////  function(entry){
        ////    console.log("3within lfsu: " + JSON.stringify(entry));
        ////    console.log("within lfsu type: " + typeof(entry));
        ////  }, function(error){
        ////    console.log("within lfsuERROR: " + JSON.stringify(error));
        ////    console.log("within lfsu type ERROR: " + typeof(error));
        ////
        ////  });
        ////var wind = window.resolveLocalFileSystemURL(cordova.file.syncedDataDirectory,
        ////  function(entry){
        ////    console.log("4within lfsu: " + JSON.stringify(entry));
        ////    console.log("within lfsu type: " + typeof(entry));
        ////  }, function(error){
        ////    console.log("within lfsuERROR: " + JSON.stringify(error));
        ////    console.log("within lfsu type ERROR: " + typeof(error));
        ////
        ////  });
        ////var wind = window.resolveLocalFileSystemURL(cordova.file.cacheDirectory,
        ////  function(entry){
        ////    console.log("5within lfsu: " + JSON.stringify(entry));
        ////    console.log("within lfsu type: " + typeof(entry));
        ////  }, function(error){
        ////    console.log("within lfsuERROR: " + JSON.stringify(error));
        ////    console.log("within lfsu type ERROR: " + typeof(error));
        ////
        ////  });
        ////var wind = window.resolveLocalFileSystemURL(cordova.file.tempDirectory,
        ////  function(entry){
        ////    console.log("6within lfsu: " + JSON.stringify(entry));
        ////    console.log("within lfsu type: " + typeof(entry));
        ////  }, function(error){
        ////    console.log("within lfsuERROR: " + JSON.stringify(error));
        ////    console.log("within lfsu type ERROR: " + typeof(error));
        ////
        ////  });
        ////var wind2 = window.resolveLocalFileSystemURL(fileName, null, null);
        ////var wind3 = window.resolveLocalFileSystemURL(LocalFileSystem.PERSISTENT, null, null);
        ////var wind4 = window.resolveLocalFileSystemURL(LocalFileSystem.PERSISTENT, function(){}, function(){});
        //
        //
        //
        ////console.log("type 1: " + typeof(wind));
        ////console.log("type 2: " + typeof(wind2));
        ////console.log("type 3: " + typeof(wind3));
        ////console.log("type 4: " + typeof(wind4));
        //
        //
        //
        //
        ////var file = $cordovaFile.checkFile("cdvfile://", fileName);
        ////var file2 = $cordovaFile.checkFile("cdvfile:///", fileName);
        ////var file3 = $cordovaFile.checkFile("documents://tmp/", fileName);
        ////var file4 = $cordovaFile.checkFile("documents:///", fileName);
        //////var file2 = $cordovaFile.checkFile("file:///tmp/", fileName);
        ////var f1 = $cordovaFile.checkFile(cordova.file.tempDirectory, fileName );
        ////var f2 = $cordovaFile.checkFile(cordova.file.applicationStorageDirectory, fileName );
        ////var f3 = $cordovaFile.checkFile(cordova.file.applicationDirectory, fileName );
        ////var f4 = $cordovaFile.checkFile(cordova.file.documentsDirectory+"/tmp/", fileName );
        ////var f5 = $cordovaFile.checkFile(cordova.file.dataDirectory, fileName );
        ////var f6 = $cordovaFile.checkFile(cordova.file.syncedDataDirectory, fileName );
        ////var f7 = $cordovaFile.checkFile(cordova.file.cacheDirectory, fileName );
        ////var f8 = $cordovaFile.checkFile(cordova.file.tempDirectory, fileName );
        //////var file = $cordovaFile.checkDir(cordova.file.tempDirectory, fileName);
        ////
        ////console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@" + JSON.stringify(file));
        ////console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@2" + JSON.stringify(file2));
        ////console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@3" + JSON.stringify(file3));
        ////console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@4" + JSON.stringify(file4));
        ////console.log("file ()UR()$UT$*(H$#(*THUI(P*$H#UORBEJNK*OGILUBKJ$WEF*)YGILUBK22222:" + JSON.stringify(file2));
        ////console.log("file1:" + JSON.stringify(f1));
        ////console.log("file2:" + JSON.stringify(f2));
        ////console.log("file3:" + JSON.stringify(f3));
        ////console.log("file4:" + JSON.stringify(f4));
        ////console.log("file5:" + JSON.stringify(f5));
        ////console.log("file6:" + JSON.stringify(f6));
        ////console.log("file7:" + JSON.stringify(f7));
        ////console.log("file8:" + JSON.stringify(f8));
        //
        //
        ////NOTE TO JON: soundbite.fileName is the full path to a file when I give it to you
        ////So you'll need to parse the bit that comes after the slash. It looks like the ending
        ////of the files right now will have the directory twice and the extension twice
        ////if(platform === 'Android'){
        ////  $cordovaFile.moveFile(cordova.file.cache,
        ////                        'files/' + fileName + '.m4a',
        ////                        cordova.file.externalApplicationStorageDirectory,
        ////                        'files/' + fileName + '.m4a');
        ////  $cordovaFile.removeFile(cordova.file.cache, 'files/' + fileName + '.m4a');
        ////
        ////} else if(platform === 'iOS'){
        ////
        ////  console.log("#$#$#$#$#$$#$# inside ios");
        ////  //$cordovaFile.moveFile(cordova.file.cacheDirectory,
        ////  //                      '/' + fileName + '.wav',
        ////  //                      cordova.file.dataDirectory,
        ////  //                      '/' + fileName + '.wav');
        ////  //$cordovaFile.removeFile(cordova.file.cacheDirectory, '/' + fileName + '.m4a');
        ////
        ////} else{
        ////  fileName = fileName + '.wav';
        ////}
        ////
        ////soundbite.filename = fileName;
        ////
        ////databaseService.saveSound(soundbite);
        //
        //
      }
    };
  });
