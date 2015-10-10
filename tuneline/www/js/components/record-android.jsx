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

const recordIcon = 'fa fa-microphone';
const playIcon = 'fa fa-play';
const stopIcon = 'fa fa-stop';

const RecordButton = React.createClass({
	//Add the event listener for status changes and setup the initial state of the button
	getInitialState: function() {
		document.addEventListener('mediaChange',function(){
			this.setButtonState();
		}.bind(this));
		return {		
					file: RecordController.recordButtonMedia?RecordController.recordButtonMedia.src:null,
					status: RecordController.currentStatus,
					action: RecordController.currentAction,
					buttonColour: '#ff5722',
					iconStyle: recordIcon,
					buttonFunction: this.startRecord
					
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
		RecordController.playMedia(this.state.file);

	},
	stop: function(event) {
		RecordController.stopMedia();
	},
	reset: function(event){
		RecordController.resetMedia();
	},
	setButtonState: function(){
		this.setState(
			RecordController.mediaStatus()
		);

		if(this.state.status === 2 && this.state.action === 'RECORDING'){
			//currently recording state
			this.setState(
							{
								buttonColour: '#f44336',
								iconStyle: stopIcon,
								buttonFunction: this.stopRecord
							}	
			);
		} else if(this.state.status === 4 && this.state.file !== null){
			//ready to play state
			this.setState(
							{
								buttonColour: '#4caf50',
								iconStyle: playIcon,
								buttonFunction: this.play
							}
			);		
		} else if(this.state.status === 2 && this.state.action === 'PLAYING'){
			//currently playing state
			this.setState(
							{
								buttonColour: '#f44336',
								iconStyle: stopIcon,
								buttonFunction: this.stop
							}
			);		
		} else if(this.state.status === 0){
			//ready to record state
			this.setState(
							{
								buttonColour: '#ff5722',
								iconStyle: recordIcon,
								buttonFunction: this.startRecord
							}
			);
		}
	},
	render() {
	    return (
	    	<div style={divStyle}>
	    		file: {this.state.file}<br/>
				status: {this.state.status}<br/>
				action: {this.state.action}
		        <FloatingActionButtonFlex onClick={this.state.buttonFunction} 
		        							style={buttonStyle} 
		        							backgroundColor={this.state.buttonColour}>
		        	<i className={this.state.iconStyle}></i>
		        </FloatingActionButtonFlex>        
	        </div>
	    );
  },
});

module.exports = RecordButton;