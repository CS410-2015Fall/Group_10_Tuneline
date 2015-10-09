const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');

const RecordController = require('./recordcontroller');

const RecordButton = React.createClass({
	startRecord: function(event) {
		var now = new Date();
		RecordController.startRecording(now.getTime()+'.m4a');
	},
	stopRecord: function(event) {
		this.props.audioName = RecordController.stopRecording();
	},
	play: function(event) {
		RecordController.playMedia(this.props.audioName);
	},
	stop: function(event) {
		RecordController.stopMedia();
	},
	render() {
	    return (
	    	<div>
		        <FloatingActionButton onClick={this.startRecord} width={this.props.buttonwidth}>
		        	<i className="material-icons">&#xE029;</i>
		        </FloatingActionButton>
		        <FloatingActionButton onClick={this.stopRecord}>
		        	<i className="material-icons">&#xE034;</i>
		        </FloatingActionButton>
		        <FloatingActionButton onClick={this.play}>
		        	<i className="material-icons">&#xE037;</i>
		        </FloatingActionButton>
		        <FloatingActionButton onClick={this.stop}>
		        	<i className="material-icons">&#xE037;</i>
		        </FloatingActionButton>
	        </div>
	    );
  },
});

module.exports = RecordButton;