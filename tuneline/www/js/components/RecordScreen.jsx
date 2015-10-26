const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FloatingActionButtonFlex = require('./floating-action-button-flex');

const MediaPlayer = require('./MediaPlayer');
const MetaDataForm = require('./MetaDataForm');

const RecordController = require('./recordController');

var timerObj = null;

var buttonStyle = {
    height: '200px',
    width: '200px',
};

var divStyle = {
	width: '100%',
	height: '100%',
	textAlign: 'center'
};

var recordIcon = 'ion-record';
var playIcon = 'ion-play';
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
					buttonFunction: this.startRecord,
					time: {
						hours: 0,
						minutes:0,
						seconds:0
					}
					
				};
	},	
	startRecord: function() {
		this.reset();
		var now = new Date();
		RecordController.startRecording(now.getTime()+'.m4a');
		//this.startTimer();
		
	},
	stopRecord: function() {
		RecordController.stopRecording();
		this.stopTimer();
	},
	reset: function(){
		this.timerInHundrethSeconds = 0;
		this.setState(
				{		
					file: null,
					time: {
						hours: 0,
						minutes:0,
						seconds:0
					}					
				}
		);
		RecordController.resetMedia();
	},	
	timerInHundrethSeconds: 0,
	startTimer: function(){
		timerObj = window.setInterval(function(){
			this.timerInHundrethSeconds++;
			this.setState({
				time: {
					hours: Math.floor(this.timerInHundrethSeconds/(36000)),
					minutes: Math.floor((this.timerInHundrethSeconds%(36000))/(600)),
					seconds:( ((this.timerInHundrethSeconds%36000)%600)/10).toFixed(1)}
			});
		}.bind(this), 100);
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
		} else if(this.state.status === 4){
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
	save: function(event){
		if(this.refs.metaDataForm){
			this.refs.metaDataForm.save();
			this.reset();
		}
	},
	render() {
		var mediaPlayer = <MediaPlayer
								ref="mediaPlayer"
								mediaPlayerStyle={{margin:'0 5%'}}/>;
		var metaDataForm;
		var saveButtons;

		if(this.state.file !== null && this.state.status === 4){
			mediaPlayer = <MediaPlayer
								key="mediaPlayer"
								ref="mediaPlayer"
								mediaPlayerStyle={{margin:'0 5%'}}
								file={this.state.file}/>;
			metaDataForm = <MetaDataForm
								key="metaDataForm"
								ref="metaDataForm"
								media={this.state.file}/>;
			saveButtons = <RaisedButton label="Save" primary={true} fullWidth={true} onClick={this.save}/>;
		}

	    return (
	    	<div style={divStyle}>
	    		<br/>
	    		{saveButtons}
	    		<br/><br/>
		        <FloatingActionButtonFlex 
							style={buttonStyle} 
							backgroundColor={this.state.buttonColour}
							onClick={this.state.buttonFunction}
							iconClassName={this.state.iconStyle}>
		        </FloatingActionButtonFlex>
		        <h1>{this.state.time.hours}h {this.state.time.minutes}m {this.state.time.seconds}s</h1>
		        {mediaPlayer}
		        {metaDataForm}
		        {saveButtons}
	        </div>
	    );
  },
});

module.exports = RecordButton;