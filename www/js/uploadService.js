var app = angular.module('uploadService', []);

app.factory("UploadService", function($cordovaFileTransfer, $http, DatabaseService) {
    var uri = "http://159.203.246.24/simpleUpload.php";
    var fac = {};

    fac.uploadMetadata = function(id) {
        var callback = function(rows) {
            // post metadata to server
            var url = "http://159.203.246.24/sync.php";
            var data = {"id": id, "metadata": rows};
            $http.post(url, data)
            .then(function (result){
                console.log("Metadata posted to server");
                // alert(result.data);
                // console.log(JSON.stringify(result.data));
            });
        }
        // get metadata from database minus photos
        DatabaseService.getSoundsNoPic(callback);
    }

    fac.uploadFile = function(path, userid, sbId) {
        var options = {
            // fileKey: "avatar",
            fileName: userid+path.split("/").pop(),
            chunkedMode: false,
            mimeType: "audio/mpeg",
            headers: {"Access-Control-Allow-Origin": "*"},
        };
        $cordovaFileTransfer.upload(uri, path, options)
        .then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
            var filename = path.split("/").pop().split(".")[0];
            DatabaseService.saveMP3URL(sbId, "http://159.203.246.24/sb/"+userid+filename+".mp3");
            fac.uploadMetadata(userid);
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
    }

    return fac;
});