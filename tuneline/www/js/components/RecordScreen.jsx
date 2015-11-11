const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FloatingActionButtonFlex = require('./floating-action-button-flex');
const DropDownMenu = require('material-ui/lib/drop-down-menu');

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
	
	getInitialState: function() {
		return {		
					file: RecordController.recordButtonMedia?RecordController.recordButtonMedia.src:null,
					tempFileName: null,
					tempUrl: null,
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
		var fileName = now.getTime().toString();
		if(device.platform === 'Android'){
			fileName = cordova.file.externalApplicationStorageDirectory + 
							'files/' + fileName + '.m4a';
		} else if(device.platform === 'iOS'){
			fileName =  fileName + '.wav';
		} else{
			fileName = fileName + '.wav';
		}
		RecordController.startRecording(fileName,this.setButtonState);
		this.setState({
			tempFileName: fileName
		});	
	},
	stopRecord: function() {
		RecordController.stopRecording();
		this.stopTimer();
		this.setState(
			{		
				time: {
					hours: 0,
					minutes:0,
					seconds:0
				}					
			}
		);
	},
	reset: function(){
		this.setState(
			{		
				file: null,
				tempFileName: null,
				tempUrl: null,
				time: {
					hours: 0,
					minutes:0,
					seconds:0
				}					
			}
		);
		RecordController.resetMedia();
	},	
	startTimer: function(){
		var timerInHundrethSeconds = 0;
		timerObj = window.setInterval(function(){
			timerInHundrethSeconds++;
			this.setState({
				time: {
					hours: Math.floor(timerInHundrethSeconds/(36000)),
					minutes: Math.floor((timerInHundrethSeconds%(36000))/(600)),
					seconds:( ((timerInHundrethSeconds%36000)%600)/10).toFixed(1)}
			});
		}.bind(this), 100);
	},
	stopTimer: function(){
		window.clearInterval(timerObj);
	},
	//Callback function to set the state of the button
	setButtonState: function(mediaState){
		console.log('RECORD CALLBACK - mediaState: ' + mediaState);
		if(mediaState === 2){
			//currently recording state
			this.setState(
							{
								buttonColour: '#f44336',
								iconStyle: stopIcon,
								buttonFunction: this.stopRecord,
								status: mediaState
							}	
			);
			this.startTimer();
		} else if(mediaState === 4){
			//ready to record state
			console.log('this.state.tempFileName: ' + this.state.tempFileName);
			this.setState(
							{
								buttonColour: '#ff5722',
								iconStyle: recordIcon,
								buttonFunction: this.startRecord,
								file: this.state.tempFileName,
								status: mediaState
							}
			);	
		}
	},
	save: function(soundbite){
		if(this.refs.metaDataForm){
			this.refs.mediaPlayer.stop();
			this.reset();
			this.props.callbackParent(soundbite);
		}
	},
	saveButton: function(event){
		this.refs.metaDataForm.save();
	},
	updatePlayTimer: function(timeInSeconds){
		var hours = Math.floor(timeInSeconds/3600);

		var minutes = Math.floor((timeInSeconds%3600)/60);

		var seconds = ((timeInSeconds%3600)%60).toFixed(1);

		this.setState({
					time: {
						hours: hours,
						minutes:minutes,
						seconds:seconds
					}
				});

	},
	loadSite: function(event, selectedIndex, menuItem){
		var ref = cordova.InAppBrowser.open(menuItem.payload, '_blank', 'location=yes');
		ref.addEventListener('exit', this.parseUrl);
		ref.addEventListener('loadstop', function(event){
			ref.executeScript({code:'window.location.href;'}, function(data){
				this.setState({tempUrl: data});
			}.bind(this));		
		}.bind(this));

	},
	parseUrl:function(event){
		this.refs.urlSelectMenu.setState({selectedIndex:0});
	},
	render() {
		var mediaPlayer = <MediaPlayer
								ref="mediaPlayer"
								mediaPlayerStyle={{margin:'0 5%'}}
								updateParentTime={this.updatePlayTimer}
								/>;
		var metaDataForm;
		var saveButtons;

		var now = new Date();

		if(this.state.file !== null && this.state.status === 4){
			mediaPlayer = <MediaPlayer
								key="mediaPlayer"
								ref="mediaPlayer"
								mediaPlayerStyle={{margin:'0 5%'}}
								file={this.state.file}								
								updateParentTime={this.updatePlayTimer}
								/>;			
		}
		if(this.state.tempUrl !== null || this.state.file !== null){
			saveButtons = <RaisedButton label="Save" primary={true} fullWidth={true} onClick={this.saveButton}/>;
			metaDataForm = <MetaDataForm
								key={now}
								ref="metaDataForm"
								media={this.state.file}
								url={this.state.tempUrl}
								callbackParent={this.save}							
								/>;
		}

		var menuItems = [
		   { payload: '', text: 'Import Media From...' },
		   { payload: 'https://youtube.com', text: 'YouTube' }
		];
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
		        <DropDownMenu ref="urlSelectMenu" menuItems={menuItems} onChange={this.loadSite}/>
		        <h1>{this.state.time.hours}h {this.state.time.minutes}m {this.state.time.seconds}s</h1>
		        {mediaPlayer}
		        {metaDataForm}
		        {saveButtons}
	        </div>
	    );
  },
});

module.exports = RecordButton;