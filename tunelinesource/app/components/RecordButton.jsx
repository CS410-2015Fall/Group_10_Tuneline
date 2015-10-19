import {  Reapp, 
          React, 
          Button,
          Icon } from 'reapp-kit';

var MediaPlayer = require('./MediaPlayer');
var RecordController = require('./recordcontroller');

var timerObj = null;

var buttonStyle = {
    height: '300px',
    width: '300px',
    borderRadius: '100%',
    alignSelf: 'center'
};

var divStyle = {
	width: '100%',
	height: '100%',
	textAlign: 'center'
};

var recordIcon = require('reapp-kit/node_modules/reapp-ui/assets/icons/mic2.svg');
var playIcon = require('reapp-kit/node_modules/reapp-ui/assets/icons/play.svg');
var stopIcon = require('reapp-kit/node_modules/reapp-ui/assets/icons/square.svg');

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
					buttonFunction: this.startRecord,
					time: {
						hours: 0,
						minutes:0,
						seconds:0
					},
					duration: 0
					
				};
	},	
	startRecord: function() {
		var now = new Date();
		RecordController.startRecording(now.getTime()+'.m4a');
		
	},
	stopRecord: function() {
		RecordController.stopRecording();
		this.stopTimer();
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
	timerInSeconds: 0,
	startTimer: function(){
		timerObj = window.setInterval(function(){
			this.timerInSeconds++;

			this.setState({
				time: {
					hours: Math.floor(this.timerInSeconds/3600),
					minutes: Math.floor((this.timerInSeconds%3600)/60),
					seconds: Math.floor((this.timerInSeconds%3600)%60)}
			});
		}.bind(this), 1000);
	},
	stopTimer: function(){
		window.clearInterval(timerObj);
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
			this.startTimer();
		} else if(this.state.status === 4 && this.state.file !== null){
			//ready to play state
			this.setState(
				{
					buttonColour: '#4caf50',
					iconStyle: playIcon,
					buttonFunction: this.play,
					duration: RecordController.getDuration()
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
		var mediaPlayer = <MediaPlayer mediaLength={this.timerInSeconds}/>;
	    return (
	    	<div style={divStyle}>
	    		file: {this.state.file}<br/>
				duration: {this.state.duration}
				<h1>{this.state.time.hours}h {this.state.time.minutes}m {this.state.time.seconds}s</h1>
		        <Button 
							style={buttonStyle} 
							color={this.state.buttonColour}
							onClick={this.state.buttonFunction}
							rounded
							>
					<Icon file={this.state.iconStyle} size={250} stroke={0.1} color="#FFFFFF"/>
		        </Button>
		        {mediaPlayer}
		        <br/>
		        <br/>
		        <br/>
		        <br/>
		        <br/>
		        <br/>
		        <br/>
		        <br/>
		        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
	        </div>
	    );
  },
});

module.exports = RecordButton;