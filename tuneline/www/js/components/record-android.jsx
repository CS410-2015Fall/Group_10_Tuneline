const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');

const RecordController = require('./recordcontroller');

const RecordButton = React.createClass({
	startRecord: function(event) {
		RecordController.startRecording('testFile.amr');
	},
	stopRecord: function(event) {
		RecordController.stopRecording();
	},
	render() {
	    return (
	    	<div>
		        <FloatingActionButton onClick={this.startRecord} iconClassName="muidocs-icon-action-grade" />
		        <FloatingActionButton onClick={this.stopRecord} iconClassName="muidocs-icon-action-grade" />
	        </div>
	    );
  },
});

module.exports = RecordButton;