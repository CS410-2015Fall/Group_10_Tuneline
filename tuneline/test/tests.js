process.env.NODE_ENV = 'test'

var db = require('./db-tests');

var assert = require("assert");

describe('TextChanger', function(){
    var element = document.createElement("section");
    element.appendChild(
        document.createElement("span")
            .appendChild(
                document.createTextNode("Replace me")
            )
    );

    describe('#changeText(element, text)', function() {
        it('should replace the content of the element with given text', function() {
            assert.equal(false, false);
        });

        it('should throw and error if element is not a DOM element', function() {
            assert.equal(false, false);
        });
    });
});