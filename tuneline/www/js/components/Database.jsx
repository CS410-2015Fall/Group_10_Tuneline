// Database.js

var db;

module.exports = {

	// Returns all sounds to the callback function
	getSounds: function(callback) {
		db.transaction(function(tx){getSounds(tx, callback)}, txErrorCB, txSuccessCB);
	},

	// Returns sound with given id to the callback function
	// id is either an integer or a list of integers
	getSoundById: function(callback, id) {
		if (id.constructor === Array) {
			// is array
			console.log("Soundbit IDs requested: %o", id);
		} else if ()
		db.transaction(function(tx){getSounds(tx, callback)}, txErrorCB, txSuccessCB);
	},

	saveSound: function(jsonObj) {
		db.transaction(
			function(tx) {
				tx.executeSql("INSERT INTO 'Soundbits' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)",[jsonObj.type, jsonObj.name, jsonObj.datetime, jsonObj.filename, jsonObj.url, jsonObj.tags, jsonObj.photo, jsonObj.author, JSON.stringify(jsonObj.location)], sqlSuccessCB, sqlErrorCB)}, txErrorCB, txSuccessCB);
	},

	updateSound: function(jsonObj) {
		db.transaction(
			function(tx) {
				tx.executeSql("UPDATE 'Soundbits' SET name=?, datetime=?,tags=?,photo=?,location=?) WHERE id=?",[jsonObj.name, jsonObj.datetime, jsonObj.tags, jsonObj.photo, JSON.stringify(jsonObj.location), jsonObj.id], sqlSuccessCB, sqlErrorCB)}, txErrorCB, txSuccessCB);	
	}

}

// wait for load
document.addEventListener('deviceready', onDeviceReady, false);

// Create db on first run
function onDeviceReady(){
	db = window.openDatabase("tuneline", "1.0", "Tuneline DB", "1000000");
	db.transaction(createTable, txErrorCB, txSuccessCB);
}

var getSounds = function(tx, callback) {
	var successCB = function(tx, queryResult, callback) {
		var rows = resultSetToList(queryResult);
		console.log("Rows in successCB: %o", rows);
		callback(rows);
	}
	tx.executeSql("SELECT * FROM Soundbits ORDER BY datetime DESC", [], function(tx,r){successCB(tx,r,callback)}, sqlErrorCB);
}

// Takes SQLResultSet, returns rows as a list of JSON objects
var resultSetToList = function(results) {
	var len = results.rows.length;
	var rows = [];

	for (var i=0; i<len; i++){
    	rows.push(results.rows.item(i));
    	var locObj = JSON.parse(results.rows.item(i).location);
    	rows[rows.length-1].location = locObj;
    }
    return rows;
}

// Create the table if not present
var createTable = function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS "Soundbits" ("id" INTEGER PRIMARY KEY,"type" TEXT NOT NULL,"name" TEXT,"datetime" TEXT NOT NULL,"filename" TEXT,"url" INTEGER,"tags" TEXT,"photo" TEXT,"author" TEXT,"location" TEXT NOT NULL);');
}

// Generic SQL error callback
var sqlErrorCB = function(e) {
    console.log("SQL error: " + e.message);
}

// Generic SQL success callback
var sqlSuccessCB = function(e) {
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

