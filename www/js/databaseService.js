angular.module('databaseService', ['databaseConfig'])
// DB wrapper
.factory('DatabaseService', function($q, DB_CONFIG) {
    var db = null;

    // opens a db, and inits the tables
    var init = function() {
        // 10MB est size (limit for iOS is 50MB)
        db = window.openDatabase(DB_CONFIG.name, '1.0', 'Tuneline Database', 10 * 1024 * 1024);

        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var queryString = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            // query(queryString);
            db.transaction(function(transaction){transaction.executeSql(queryString)});
            console.log('Table ' + table.name + ' initialized');
        });
    }

    var query = function(query, bindings, callback) {
      bindings = typeof bindings !== 'undefined' ? bindings : [];
      var deferred = $q.defer();
      db.transaction(function(transaction) {
          transaction.executeSql(query, bindings, function(transaction, result) {
              deferred.resolve(result, callback);
              var rows = fetchAll(result);
              callback(rows);
          }, function(transaction, error) {
              deferred.reject(error);
          });
      });

      return deferred.promise;
    }

    // returns all rows of the query
    var fetchAll = function(result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        
        return output;
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
    // was used for tags : removing has symbols, preserving @ symbols
    var replaceAll = function(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    var successCB = function() {
        console.log("Generic query success");
    }

    var errorCB = function() {
        console.log("Generic query error");
    }

    init();

    return {

        getPlaylists: function(cb) {
            query("SELECT * FROM Playlists ORDER BY name ASC", [], cb, errorCB);
        },

        getPlaylistSounds: function(pid, cb) {
            query("SELECT * FROM SoundbitesPlaylistMap as spm RIGHT JOIN Soundbites as sb ON spm.sid=sb.id WHERE pid=? ORDER BY sb.id DESC", [pid], cb, errorCB)
        },

        getSounds: function(cb) {
            query("SELECT * FROM Soundbites ORDER BY datetime DESC", [], cb, errorCB);
        },

        getSoundsNoPic: function(cb) {
            query("SELECT name,datetime,fileName,url,tags,author,position,dayofweek,timeofday,mediaLength FROM Soundbites ORDER BY datetime DESC", [], cb, errorCB);  
        },

        getSoundsById: function(id, cb) {
            if (isInt(id)) {
                query("SELECT * FROM Soundbites WHERE id='?'", [id], cb, errorCB);
            } else if (id.constructor === Array) {
                query("SELECT * FROM Soundbites WHERE id IN ('?')", [id.join()], cb, errorCB);
            }
        },

        getUser: function(cb) {
            query("SELECT * FROM UserInfo", [], cb, errorCB);
        },

        removeSound: function(id, cb) {
            query("DELETE FROM Soundbites WHERE id=?", [id]);
        },

        saveFriends: function(friends) {
            for (var i=0; i<friends.length; i++) {
                query("INSERT INTO Friends (id,name) VALUES ('?','?') ON DUPLICATE KEY UPDATE name = VALUES(name)", [friends[i]['id'], friends[i]['name']]);
            }
        },

        saveFriendsSyncStatus: function(friends) {
            for (var i=0; i<friends.length; i++) {
                query("INSERT INTO Friends (id,name,doSync) VALUES ('?','?','?') ON DUPLICATE KEY UPDATE name = VALUES(name), doSync = VALUES(doSync)", [friends[i]['id'], friends[i]['name'], 1]);
            }
        },

        saveSound: function(jsonObj) { //public
            // length is/should be provided

            // changes datetime to unix timestamp, get day of the week
            var datetime = jsonObj.datetime;
            var day = datetime.getDay();
            var timestamp = Math.round(jsonObj.datetime.getTime());
            var time = datetime.getHours()+datetime.getMinutes();
            query("INSERT INTO Soundbites (type,name,datetime,fileName,url,tags,photo,author,position,dayofweek,timeofday,mediaLength) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [jsonObj.type, jsonObj.name, timestamp, jsonObj.fileName, jsonObj.url, jsonObj.tags, jsonObj.photo, jsonObj.author, JSON.stringify(jsonObj.position), day, time, jsonObj.mediaLength], successCB, errorCB)
        },

        saveUser: function(id, name) {
            query("INSERT INTO UserInfo (id,name) VALUES (?,?)", [id, name], successCB, errorCB)
        },

        updateSound: function(jsonObj) { //public
            var datetime = jsonObj.datetime;
            var day = datetime.getDay();
            var timestamp = Math.round(jsonObj.datetime.getTime());
            var time = datetime.getHours()+datetime.getMinutes();
            query("UPDATE Soundbites SET (name=?,datetime=?,tags=?,photo=?,position=?,dayofweek=?,timeofday=?) WHERE id=?", [jsonObj.name, timestamp, jsonObj.tags, jsonObj.photo, JSON.stringify(jsonObj.position), jsonObj.id, day, time], successCB);
        },

        savePlaylist: function(jsonObj) { //public
            var name = jsonObj.name;
            query("INSERT INTO Playlists (name) VALUES (?)", [name], successCB)
        },

        updatePlaylist: function(pid, name) { //public
            query("UPDATE Playlist SET name=? WHERE pid=?", [name, pid]);
        },

        removePlaylist: function(pid) { //public
            query("DELETE FROM Playlists WHERE id=?", [pid]);
            query("DELETE FROM SoundbitesPlaylistMap WHERE pid=?", [pid]);
        },

        saveSoundToPlaylist: function(sid, pid) { //pubic
            query("INSERT INTO SoundbitesPlaylistMap (sid, pid) VALUES (?,?)", [sid, pid]);
        },

        removeSoundFromPlaylist: function(sid, pid) { //public
            query("DELETE FROM SoundbitesPlaylistMap WHERE sid=? AND pid=?", [sid, pid]);
        },

        updateSync: function(b, id) {
            var val = (b==true) ? 1 : 0;
            query("UPDATE UserInfo SET doSync=? WHERE id=?", [val,id], successCB);
        },

        // gets
        getSoundbiteResult: function() {
            return soundbiteResult;
        },
        getPlaylistResult: function() {
            return playlistResult;
        },
        getPlaylistSoundsResult: function() {
            return playlistSoundsResult;
        }

        
    }
});
