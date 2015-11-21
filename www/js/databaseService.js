angular.module('databaseService', ['databaseConfig'])
// DB wrapper
.factory('DatabaseService', function($q, DB_CONFIG) {
    var db = null;
    var soundbiteResult = [];
    var playlistResult = [];
    var playlistSoundsResult = [];

    // opens a db, and inits the tables
    var init = function() {
        // 10MB est size (limit for iOS is 50MB)
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'Tuneline Database', 10 * 1024 * 1024);});

        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
            console.log('Table ' + table.name + ' initialized');
        });
    };

    var query = function(query, bindings, callback) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();

        db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result, callback);
                callback(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });

        return deferred.promise;
    };

    // returns all rows of the query
    self.fetchAll = function(result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        
        return output;
    };

    var getPlaylists = function() {
        query("SELECT * FROM Playlists ORDER BY name ASC", [], playlistCB);
    }

    var getPlaylistSounds = function(pid) {
        query("SELECT * FROM SoundbitesPlaylistMap as spm RIGHT JOIN Soundbites as sb ON spm.sid=sb.id WHERE pid=? ORDER BY sb.id DESC", [pid], playlistSoundsCB)
    }

    var getSounds = function() {
        query("SELECT * FROM Soundbites ORDER BY datetime DESC", [], soundCB);
    }

    var getSoundsById = function(id) {
        if (isInt(id)) {
            query("SELECT * FROM Soundbites WHERE id=?", [id], function(tx,r){soundQuerySuccessCB(tx,r,callback)}, sqlErrorCB);
        } else if (id.constructor === Array) {
            query("SELECT * FROM Soundbites WHERE id IN ('?')", [id.join()], function(tx,r){soundQuerySuccessCB(tx,r,callback)}, sqlErrorCB);
        }
    }

    var saveSound = function(jsonObj) {
        // length is/should be provided

        // changes datetime to unix timestamp, get day of the week
        var datetime = jsonObj.datetime;
        var day = datetime.getDay();
        var timestamp = Math.round(jsonObj.datetime.getTime()/1000);
        var time = datetime.getHours()+datetime.getMinutes();
        query("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location,dayofweek) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [jsonObj.type, jsonObj.name, timestamp, jsonObj.filename, jsonObj.url, jsonObj.tags, jsonObj.photo, jsonObj.author, JSON.stringify(jsonObj.location), day, time, jsonObj.length], sqlSuccessCB, sqlErrorCB)
    }

    var updateSound = function(jsonObj) {
        query("UPDATE 'Soundbites' SET name=?, datetime=?,tags=?,photo=?,location=?) WHERE id=?", [jsonObj.name, jsonObj.datetime, jsonObj.tags, jsonObj.photo, JSON.stringify(jsonObj.location), jsonObj.id], successCB)};
    }

    var savePlaylist = function(jsonObj) {
        var name = jsonObj.name;
        query("INSERT INTO 'Playlists' (name) VALUES (?)", [name], successCB)
    }

    var updatePlaylist = function(pid, name) {
        query("UPDATE 'Playlist' SET name=? WHERE pid=?", [name, pid]);
    }

    var removePlaylist = function(pid) {
        query("DELETE FROM 'Playlists' WHERE id=?", [pid]);
        query("DELETE FROM 'SoundbitesPlaylistMap' WHERE pid=?", [pid]);
    }

    var saveSoundToPlaylist = function(sid, pid) {
        query("INSERT INTO 'SoundbitesPlaylistMap' (sid, pid) VALUES (?,?)", [sid, pid]);
    }

    var removeSoundFromPlaylist = function(sid, pid) {
        query("DELETE FROM 'SoundbitesPlaylistMap' WHERE sid=? AND pid=?", [sid, pid]);
    }

    // returns true if value is an int or a string representation of an int
    var isInt = function(value) {
        var x;
        if (isNaN(value)) {
            return false;
        }
        x = parseFloat(value);
        return (x | 0) === x;
    }

    // replace all instances of 'find' with 'replace' in string 'str'
    // was used for tags: removing has symbols, preserving @ symbols
    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    // callbacks
    var soundCB = function(result) {
        soundbiteResult = fetchAll(result);
    }
    var playlistCB = function(result) {
        playlistResult = fetchAll(result);
    }
    var playlistSoundsCB = function(result) {
        // should be list of Soundbite metadata
        var playlistSoundsResult = fetchAll(result);
    }
    var successCB = function() {
        console.log("Generic query success");
    }

    // initialize
    init();
})
