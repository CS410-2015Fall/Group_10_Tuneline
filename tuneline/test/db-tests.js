var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


var db = require('../www/js/components/Database.jsx');

// describe('db test', function () {
// 	it('should add 1+1 correctly', function (done) {
// 		var onePlusOne = 1 + 1;
// 		assert.equal(onePlusOne, 2);
// 		// must call done() so that mocha know that we are... done.
// 		// Useful for async tests.
// 		done();
// 	});
// });

console.log("Database Javascript Console Output:");
console.log("-----------------------------------");

var aFilter = {
	"filtername": "some filter",
	"date": {
		"start": "2014-02-16",
		"end":   "2015-05-20"
	},
	"day": [1, 2, 3, 4],
	"time": {
		"start": "0309",
		"end":   "2355"
	},
	"length": {
		"min": 55,
		"max": 1750
	},
	"tags": "#concert #fun @bob90",
	"name": "metrotown shopping",
	"photo": true,
	"author": "@greg5050"
};

describe('Filter Test', function() {
	it('should generate a query with all filters', function(done) {
		var expected = "SELECT * FROM Soundbites WHERE (datetime > 1394953200) AND (datetime < 1434869999) AND (timeofday > '0309') AND (timeofday > '0309') AND (length > '55') AND (length < '1750') AND (photo<>'undefined') AND (author LIKE '%@greg5050%') AND (name LIKE '%metrotown shopping%') AND (tags LIKE '%concert%') AND (tags LIKE '%fun%') AND (tags LIKE '%@bob90%')";
		var actual = db.testFunc(aFilter);
		assert.equal(actual, expected, "generated filter query and expected query are not equal");
		done();
	});
});





// functions to test:

// saving soundbites to database
// getting soundbites from database
// getting a soundbite by id
// update a soundbite
// reset the table

// *** get filtered sounds