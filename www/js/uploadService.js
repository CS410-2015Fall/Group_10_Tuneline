var app = angular.module('uploadService', []);

app.factory("UploadService", function($cordovaFileTransfer, DatabaseService) {
    var uri = "http://159.203.246.24/simpleUpload.php";
    var fac = {};

    fac.uploadFile = function(path, id) {
        var options = {
            // fileKey: "avatar",
            fileName: id+path.split("/").pop(),
            chunkedMode: false,
            mimeType: "audio/mpeg",
            headers: {"Access-Control-Allow-Origin": "*"},
        };
        $cordovaFileTransfer.upload(uri, path, options)
        .then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
    }

    fac.uploadMetadata = function(id) {
        // get metadata from database minus photos
        var callback = function(rows) {
            // post metadata to server
            var url = "http://159.203.246.24/sync.php";
            var data = {"id": id, "metadata": rows};
            $http.post(url, data)
            .then(function (result){
                console.log("Metadata posted to server");
                console.log(result.data);
            });
        }
        DatabaseService.getSoundsNoPic(callback);
    }

    return fac;
});