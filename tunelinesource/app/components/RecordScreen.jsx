import {  Reapp, 
          React, 
          Button } from 'reapp-kit';

var RecordButton = require('./RecordButton');

var RecordScreen = React.createClass({
	render() {
	    return (	    	
			<RecordButton ref="myRecordButton"/>
	    );
  },
});

module.exports = RecordScreen;