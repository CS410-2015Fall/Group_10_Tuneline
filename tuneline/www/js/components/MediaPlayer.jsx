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
		return {value:0};
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
		RecordController.seekTo(value*100);
	},
	updateTime: function(){
		timerObj = window.setInterval(function(){
			this.setState({
				value: RecordController.getCurrentPosition()
			});
		}.bind(this), 1);
	},
	render() {
		var mediaPlayerStyle = this.props.mediaPlayerStyle;
	    return (
	    	<div style={mediaPlayerStyle}>
	    	{this.state.value}
	    	{this.props.file}
	    		<Slider 
	    			disabled={this.props.disabled}
	    			name="mediaSlider" 
	    			ref="mediaSlider" onChange={this.seekTo}
	    			max={this.props.mediaLength==0?1:this.props.mediaLength} 
	    			min={0}
	    			value={this.state.value}/>
				<FlatButton 
					disabled={this.props.disabled}
					onClick={this.play}
					primary={true}>
					<FontIcon className="ion-play" />
				</FlatButton>
				<FlatButton
					disabled={this.props.disabled}
					onClick={this.pause}>
					<FontIcon className="ion-pause" />
				</FlatButton>
				<FlatButton
					disabled={this.props.disabled}
					onClick={this.stop}>
					<FontIcon className="ion-stop" />
				</FlatButton>
				<br/>

	    	</div>

	    );
  },
});

module.exports = MediaPlayer;