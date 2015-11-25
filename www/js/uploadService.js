var app = angular.module('uploadService', []);

app.factory("UploadService", function($cordovaFileTransfer) {
    var uri = "http://159.203.246.24/simpleUpload.php";
    var fac = {};

    fac.upload = function(path) {
        var options = {
            // fileKey: "avatar",
            fileName: path.split("/").pop(),
            chunkedMode: false,
            mimeType: "audio/mpeg",
            headers: {"Access-Control-Allow-Origin": "*"}
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

    return fac;
});