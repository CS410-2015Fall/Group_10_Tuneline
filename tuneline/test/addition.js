var chai = require('chai');
var assert = chai.assert;

describe('addition', function () {
 it('should add 1+1 correctly', function (done) {
   var onePlusOne = 1 + 1;
   assert.equal(onePlusOne, 2);
   // must call done() so that mocha know that we are... done.
   // Useful for async tests.
   done();
 });
});