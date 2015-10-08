const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');

const RecordController = require('./recordcontroller');

const RecordButton = React.createClass({
	handleClick: function(event) {
		//RecordController.startRecording('testFile');
		var media = new Media('fileName.mp3');
		media.startRecord();
		alert('Supposed to have started recording.');
	},
	render() {
	    return (
	        <FloatingActionButton iconClassName="muidocs-icon-action-grade" />
	    );
  },
});

module.exports = RecordButton;