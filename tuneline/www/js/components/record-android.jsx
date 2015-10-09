const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const RaisedButton = require('material-ui/lib/raised-button');
const FloatingActionButtonFlex = require('./floating-action-button-flex');

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
		        <FloatingActionButtonFlex onClick={this.startRecord} style={buttonStyle}>
		        	<i className="fa fa-microphone"></i>
		        </FloatingActionButtonFlex>
		        <FloatingActionButtonFlex onClick={this.stopRecord} style={buttonStyle}>
		        	<i className="fa fa-stop"></i>
		        </FloatingActionButtonFlex>
		        <FloatingActionButtonFlex onClick={this.play} style={buttonStyle}>
		        	<i className="fa fa-play"></i>
		        </FloatingActionButtonFlex>
		        <FloatingActionButtonFlex onClick={this.stop} style={buttonStyle}>
		        	<i className="fa fa-stop"></i>
		        </FloatingActionButtonFlex>
	        </div>
	    );
  },
});

module.exports = RecordButton;