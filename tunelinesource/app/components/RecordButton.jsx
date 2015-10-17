import {  Reapp, 
          React, 
          Button } from 'reapp-kit';

var RecordController = require('./recordcontroller');

var buttonStyle = {
    height: '300px',
    width: '300px',
    borderRadius: '100%'
};

var divStyle = {
	width: '100%',
	height: '100%',
	textAlign: 'center'
};

var recordIcon = 'ion-ios-mic-outline';
var playIcon = 'ion-ios-play-outline';
var stopIcon = 'ion-stop';

var RecordButton = React.createClass({
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
	startRecord: function() {
		var now = new Date();
		RecordController.startRecording(now.getTime()+'.m4a');
		
	},
	stopRecord: function() {
		RecordController.stopRecording();

	},
	play: function() {
		RecordController.playMedia(this.state.file);

	},
	stop: function() {
		RecordController.stopMedia();
	},
	reset: function(){
		RecordController.resetMedia();
	},
	alertMe:function(){console.log('HI!!!')},
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
		        <Button 
							style={buttonStyle} 
							color={this.state.buttonColour}
							onClick={this.state.buttonFunction}
							rounded
							>
					{this.state.iconStyle}
		        </Button>
		        <Button onTap={this.alertMe}>
		        	Save
		        </Button>
		        <Button>
		        	Reset
		        </Button> 
	        </div>
	    );
  },
});

module.exports = RecordButton;