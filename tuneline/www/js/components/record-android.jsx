const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const RaisedButton = require('material-ui/lib/raised-button');
const FloatingActionButtonFlex = require('./floating-action-button-flex'); //SOON TO BE DEPRECATED

const RecordController = require('./recordcontroller');

var buttonStyle = {
    height: FloatingActionButtonFlex.buttonHeight,
    width: FloatingActionButtonFlex.buttonHeight
};

var divStyle = {
	width: '100%',
	height: '100%',
	textAlign: 'center'
};



const RecordButton = React.createClass({
	//Add the event listener for status changes and setup the initial state of the button
	getInitialState: function() {
		document.addEventListener('mediaChange',function(){
			this.update();
		}.bind(this));
		return {
				data: 	{
							file: null,
							status: 0
						}
			};
	},
	startRecord: function(event) {
		var now = new Date();
		RecordController.startRecording(now.getTime()+'.m4a');
		
	},
	stopRecord: function(event) {
		RecordController.stopRecording();

	},
	play: function(event) {
		RecordController.playMedia(this.state.data.file);

	},
	stop: function(event) {
		RecordController.stopMedia();
	},
	reset: function(event){

	},
	update: function(event){
		this.setState({
				data: RecordController.mediaStatus()
			});
	},
	render() {
	    return (
	    	<div style={divStyle}>
	    		file: {this.state.data.file}<br/>
				status: {this.state.data.status}
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