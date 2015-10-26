const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const Slider = require('material-ui/lib/slider');
const FontIcon = require('material-ui/lib/font-icon');

const RecordController = require('./recordController');

var timerObj = null;

var MediaPlayer = React.createClass({
	//Add the event listener for status changes and setup the initial state of the button
	getInitialState: function() {
		if(this.props.file){
			RecordController.initPlayer(this.props.file);
		}
		document.addEventListener('mediaCreated',function(e){
			if(this.state.mediaLength <= 0){
				this.initMedia(e);
			}			
		}.bind(this));
		document.addEventListener('updateMediaCurrentPosition',function(e){
			if(e.detail.currentPosition < 0){
				window.clearInterval(timerObj);
				return;
			}
			this.setState({
				value: e.detail.currentPosition
			});
		}.bind(this));

		return {
					value: 0,
					mediaLength: 0
				};
	},
	initMedia: function(data){
		this.setState({
			mediaLength: data.detail.mediaLength
		});
	},
	play: function(event){
		RecordController.playMedia(this.props.file);
		this.updateTime();
	},
	pause: function(event){
		RecordController.pauseMedia();
	},
	stop: function(event){
		RecordController.stopMedia();
		window.clearInterval(timerObj);
	},
	seekTo: function(event,value){
		RecordController.seekTo(value*1000);
		this.setState({
			'value': value
		});
	},
	updateTime: function(){
		timerObj = window.setInterval(function(){
			//Keep asking the RecordController what the current time is
			RecordController.getCurrentPosition();
		}.bind(this), 10);
	},
	render() {
		var mediaPlayerStyle = this.props.mediaPlayerStyle;
		var isDisabled = this.state.mediaLength>0?false:true;
		var timeSlider = <Slider 
	    			key="timeSlider"
	    			disabled={isDisabled}
	    			name="mediaSlider" 
	    			ref="mediaSlider" onChange={this.seekTo}
	    			max={this.state.mediaLength==0?1:this.state.mediaLength} 
	    			min={0}
	    			value={this.state.value}/>;
	    return (
	    	<div style={mediaPlayerStyle}>
	    	Length: {this.state.mediaLength} <br/>
	    	Position: {this.state.value} <br/>
	    	File: {this.props.file}
	    		{timeSlider}
				<FlatButton 
					disabled={isDisabled}
					onClick={this.play}
					primary={true}>
					<FontIcon className="ion-play" />
				</FlatButton>
				<FlatButton
					disabled={isDisabled}
					onClick={this.pause}>
					<FontIcon className="ion-pause" />
				</FlatButton>
				<FlatButton
					disabled={isDisabled}
					onClick={this.stop}>
					<FontIcon className="ion-stop" />
				</FlatButton>
				<br/>

	    	</div>

	    );
  },
});

module.exports = MediaPlayer;