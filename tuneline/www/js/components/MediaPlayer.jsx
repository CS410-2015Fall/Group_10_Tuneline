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
			RecordController.initPlayer(this.props.file,this.setMediaLength);
		}
		return {
					value: 0,
					mediaLength: 0
				};
	},
	setMediaLength: function(duration){
		this.setState({
			mediaLength: duration
		});
	},
	play: function(event){
		RecordController.playMedia(this.props.file,this.setPosition);
		if(this.state.value > 0  && (this.state.value*1000 < this.state.mediaLength)){
			RecordController.seekTo(this.state.value);
		}
		timerObj = window.setInterval(function(){
			//Keep asking the RecordController what the current time is
			RecordController.getCurrentPosition(this.updateTime);
		}.bind(this), 10);
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
	setPosition: function(status){
		if(status === 2){
			RecordController.seekTo(this.state.value*1000);
		}
	},
	updateTime: function(position){
		//If the position is unknown( < 0) then stop asking for time
		if(position < 0){
			window.clearInterval(timerObj);
		} else{
			//If the position is know, set the value of the slider
			this.setState({
				value: position
			});
			//Update the parent timer if needed
			if(this.props.updateParentTime)
				this.props.updateParentTime(position);
		}
		
	},
	parseMediaLength: function(timeInSeconds){
		var hours = Math.floor(timeInSeconds/3600);
		if(hours < 10){
			hours = '0'+ hours.toString();
		}

		var minutes = Math.floor((timeInSeconds%3600)/60);
		if(minutes < 10){
			minutes = '0'+ minutes.toString();
		}

		var seconds = ((timeInSeconds%3600)%60).toFixed(1);
		if(seconds < 10){
			seconds = '0' + seconds.toString();
		}

		return {hours: hours, minutes: minutes, seconds: seconds};
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
	    			value={this.state.value}
	    			/>;
	    var iconColor = 'rgba(0, 0, 0, 0.87)';
	    	if(isDisabled){
	    		iconColor = 'rgba(0, 0, 0, 0.15)';
	    	}

	    var mediaLength = this.parseMediaLength(this.state.mediaLength);
	    return (
	    	<div style={mediaPlayerStyle}>
	    		{timeSlider}
	    		<div style={{width:'100%',textAlign:'center'}}>
	    			{mediaLength.hours}:{mediaLength.minutes}:{mediaLength.seconds}
	    		</div>
	    		
				<FlatButton 
					disabled={isDisabled}
					onClick={this.play}
					primary={true}>
					<FontIcon className="ion-play" color={iconColor}/>
				</FlatButton>
				<FlatButton
					disabled={isDisabled}
					onClick={this.pause}>
					<FontIcon className="ion-pause" color={iconColor}/>
				</FlatButton>
				<FlatButton
					disabled={isDisabled}
					onClick={this.stop}>
					<FontIcon className="ion-stop" color={iconColor}/>
				</FlatButton>
				<br/>
	    	</div>

	    );
  },
});

module.exports = MediaPlayer;