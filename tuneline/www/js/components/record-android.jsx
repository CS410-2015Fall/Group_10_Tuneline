const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const RaisedButton = require('material-ui/lib/raised-button');

const RecordController = require('./recordcontroller');

var buttonStyle = {
    height: '500px',
    width: '500px'
};

var divStyle = {
	width: '100%',
	height: '100%',
	textAlign: 'center'
};



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
	    	<div style={divStyle}>
		        <FloatingActionButton onClick={this.startRecord} style={buttonStyle}>
		        	<i className="fa fa-microphone"></i>
		        </FloatingActionButton>
		        <FloatingActionButton onClick={this.stopRecord}>
		        	<i className="fa fa-stop"></i>
		        </FloatingActionButton>
		        <FloatingActionButton onClick={this.play}>
		        	<i className="fa fa-play"></i>
		        </FloatingActionButton>
		        <FloatingActionButton onClick={this.stop}>
		        	<i className="fa fa-stop"></i>
		        </FloatingActionButton>
	        </div>
	    );
  },
});

module.exports = RecordButton;