var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


// var db = require('../www/js/components/Database.jsx');

describe('test', function () {
	it('should add 1+1 correctly', function (done) {
		var onePlusOne = 1 + 1;
		assert.equal(onePlusOne, 2);
		// must call done() so that mocha know that we are... done.
		// Useful for async tests.
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