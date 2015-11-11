// Database.js

var db;
var prepop = false;

module.exports = {

	// TODO: 	getSoundsByLocation?
	//			getSoundsByPlaylist
	//			getSoundsByFilter
	//			getPlaylines - returns all playlists+names
	//			updatePlayline
	//			addToPlayline
	//			removeFromPlayline
	//			addFilter
	//			removeFilter


	// Returns all sounds to the callback function
	getSounds: function(callback) {
		db.transaction(function(tx){getSounds(tx, callback)}, txErrorCB, txSuccessCB);
	},

	// TODO
	// Returns all sounds which fall on and between the start/end dates
	// filterObj: 	JSON object with filter parameters
	getSoundsByFilter: function(callback, filterObj) {
		db.transaction(function(tx){getSoundsByFilter(tx, callback, filterObj)}, txErrorCB, txSuccessCB);
	},

	// Returns sound with given id to the callback function
	// id is either an integer or a list of integers
	getSoundsById: function(callback, id) {
		db.transaction(function(tx){getSoundsById(tx, callback, id)}, txErrorCB, txSuccessCB);
	},

	// TODO: parse timestamp for DayOfWeek, TimeOfDay
	saveSound: function(jsonObj) {
		db.transaction(function(tx){saveSound(tx, jsonObj)}, txErrorCB, txSuccessCB);
	},

	updateSound: function(jsonObj) {
		db.transaction(
			function(tx) {
				tx.executeSql("UPDATE 'Soundbites' SET name=?, datetime=?,tags=?,photo=?,location=?) WHERE id=?",[jsonObj.name, jsonObj.datetime, jsonObj.tags, jsonObj.photo, JSON.stringify(jsonObj.location), jsonObj.id], sqlSuccessCB, sqlErrorCB)}, txErrorCB, txSuccessCB);	
	},
	
	resetTable: function() {
		db.transaction(function(tx) {
			tx.executeSql("DROP TABLE Soundbites", [], function(){createTable(tx)}, sqlErrorCB)
		});
	}
}

// wait for load
document.addEventListener('deviceready', onDeviceReady, false);

// Create/open db on first run
var onDeviceReady = function() {
	var dbLoadSuccess = function() {
		console.log("Database has been loaded");
	}
	db = window.openDatabase("tuneline", "1.0", "Tuneline DB", "10000000");
	db.transaction(createTables, txErrorCB, dbLoadSuccess);
}

var getSounds = function(tx, callback) {
	tx.executeSql("SELECT * FROM Soundbites ORDER BY datetime DESC", [], function(tx,r){soundQuerySuccessCB(tx,r,callback)}, sqlErrorCB);
}

var getSoundsByFilter = function(tx, callback, filterObj) {
	var startDate;
	var endDate;
	var days;
	var times;
	var minLength;
	var maxLength;
	var hasPhoto;
	var author;
	var name;

	// build the query with if (!== undefined) && (!= "")
}

var getSoundsById = function(tx, callback, id) {
	if (isInt(id)) {
		console.log("Soundbite ID requested: " + id);
		tx.executeSql("SELECT * FROM Soundbites WHERE id=?", [id], function(tx,r){soundQuerySuccessCB(tx,r,callback)}, sqlErrorCB);
	} else if (id.constructor === Array) {
		// is array
		console.log("Soundbite IDs requested: " + id.join());
		tx.executeSql("SELECT * FROM Soundbites WHERE id IN ('?')", [id.join()], function(tx,r){soundQuerySuccessCB(tx,r,callback)}, sqlErrorCB);
	}
}

// Takes:
// 	start: 	must be defined (format: YYYY-MM-DD)
// 	end: 	optional (format: YYYY-MM-DD)
// Returns:
//	sql query statement
// TODO: test
var getDateQuery = function(start, end) {
	var explodeStart = start.split("-");
	var explodeEnd;
	var startInSeconds = new Date(explodeStart[0], explodeStart[1], explodeStart[2]);
	var endInSeconds;

	// check if end date is defined, else is end of day as end date
	if (typeof end !== "undefined") {
		// end date is defined!
		explodeEnd = end.split("-");
		endInSeconds = new Date(explodeEnd[0]. explodeEnd[1], explodeEnd[2], 23, 59, 59);
	} else {
		// end is undefined, so set the enddate as startdate plus (1 day minus 1 second)
		endInSeconds = startInSeconds+86399;
	}

	return "SELECT * FROM Soundbites ORDER BY datetime DESC WHERE datetime BETWEEN " + startInSeconds + " AND " + endInSeconds;
}

// TODO: test
var getTagQuery = function(tags) {
	// remove hastags, keep @
	tags.replace("#","");
	var tagsArray = tags.split(" ");
	var query;

	query = "SELECT * FROM Soundbites ORDER BY datetime DESC WHERE ";

	var len = tagsArray.length;
	for (var i=0; i<len; i++) {
		if (i>=1) query+= " AND ";

		query += "(tags LIKE %" + searchArray[i] + "%)"
	}

	return query;
}

// TODO: make sure the engine provides length variable in jsonObj
var saveSound(tx, jsonObj) {
	// length is/should be provided

	// change datetime to unix timestamp, get day of the week
	var datetime = jsonObj.datetime;
	var day = datetime.getDay();
	var timestamp = Math.round(jsonObj.datetime.getTime()/1000);
	console.log("Timestamp: " + timestamp);

	tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location,dayofweek) VALUES (?,?,?,?,?,?,?,?,?,?)",[jsonObj.type, jsonObj.name, timestamp, jsonObj.filename, jsonObj.url, jsonObj.tags, jsonObj.photo, jsonObj.author, JSON.stringify(jsonObj.location), day], sqlSuccessCB, sqlErrorCB)
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

// Takes SQLResultSet, returns rows as a list of JSON objects
var resultSetToList = function(results, type) {
	var len = results.rows.length;
	var rows = [];

	// loops through resultSet, parses serialized JSON location, parses timestamp back to javascript Date object
	for (var i=0; i<len; i++) {
    	rows.push(results.rows.item(i));
    	if ((typeof type !== "underfined") && (type == "soundbite")) {
	    	var locObj = JSON.parse(results.rows.item(i).location);
	    	rows[rows.length-1].location = locObj;
	    	var datetimeObj = new Date(results.rows.item(i).datetime*1000);
	    	rows[rows.length-1].datetime = datetimeObj;
	    }
    }
    return rows;
}

// Create the table if not present
var createTables = function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS "Soundbites" ("id" INTEGER PRIMARY KEY,"type" TEXT NOT NULL,"name" TEXT,"datetime" INTEGER NOT NULL,"filename" TEXT,"url" INTEGER,"tags" TEXT,"photo" TEXT,"author" TEXT,"location" TEXT NOT NULL,"dayofweek" INTEGER NOT NULL);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS "Playlists" ("pid" INTEGER PRIMARY KEY,"name" TEXT)');
	// tx.executeSql('CREATE TABLE IF NOT EXISTS "Filters" ()');
	tx.executeSql('CREATE TABLE IF NOT EXISTS "SoundbitesPlaylistMap" ("sid" INTEGER NOT NULL, "pid" INTEGER NOT NULL, FOREIGN KEY(sid) REFERENCES Soundbites(id), FOREGIN KEY(pid) REFERENCES Playlist(pid))');
	if (prepop) {
		populate(tx);
	}
}

var populate = function(tx) {
	tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", ["default", "some name #1", "Thu Oct 29 2015 01:35:15 GMT-0700 (PDT)", "NULL", "NULL", "#yoloswag", "NULL", "NULL", '{"lat":49.2602007,"lng":-123.2501255,"accuracy":5,"altitude":0,"name":"location name"}'], sqlSuccessCB, sqlErrorCB);
	tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", ["default", "test name #2", "Thu Oct 30 2015 11:35:15 GMT-0700 (PDT)", "NULL", "NULL", "#swaggerino", "NULL", "NULL", '{"lat":49.2602007,"lng":-123.2501255,"accuracy":5,"altitude":0,"name":"location name"}'], sqlSuccessCB, sqlErrorCB);
	tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", ["default", "testing #3", "Thu Oct 28 2015 00:35:15 GMT-0700 (PDT)", "NULL", "NULL", "#heylisten", "NULL", "NULL", '{"lat":49.2602007,"lng":-123.2501255,"accuracy":5,"altitude":0,"name":"location name"}'], sqlSuccessCB, sqlErrorCB);

}

var soundQuerySuccessCB = function(tx, queryResult, callback) {
	var rows = resultSetToList(queryResult, "soundbite");
	console.log("Rows in soundQuerySuccessCB: " + rows.join());
	callback(rows);
}

// Generic SQL error callback
var sqlErrorCB = function(e) {
    console.log("SQL error: " + e.message);
}

// Generic SQL success callback
var sqlSuccessCB = function() {
    console.log("SQL execute success");
}

// Generic transaction error callback
var txErrorCB = function(e) {
    console.log("Transaction error: " + e.message);
}

// Generic transaction success callback
var txSuccessCB = function() {
    console.log("Transaction success");
}

