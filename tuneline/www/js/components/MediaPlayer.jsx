import {  Reapp, 
          React, 
          Button } from 'reapp-kit';

var Slider = require('react-slider');

var RecordController = require('./recordcontroller');

var sliderTrackStyle = {
	height: '4px',
	background: '#DDDDDD'
};

var sliderHandleStyle = {
	height: '16px',
	width: '16px',
	borderRadius: '100%',
	background: '#4E4E4E',
	position: 'relative',
	bottom: '6px'

};

var MediaPlayer = React.createClass({
	//Add the event listener for status changes and setup the initial state of the button
	getInitialState: function() {
		return {value:0};
	},
	updateTime:function(){
		this.setState({value:this.refs.mediaSlider.getValue()});
		
	},
	render() {
	    return (
	    	<div>
	    	<div style={sliderTrackStyle}>
	    	<Slider ref="mediaSlider" onAfterChange={this.updateTime} max={this.props.mediaLength}>
	    		<div className="my-handle" style={sliderHandleStyle}></div>
	    	</Slider>
	    	</div>
	    	{this.state.value}
	    	</div>

	    );
  },
});

module.exports = MediaPlayer;

//Slider docs: https://github.com/mpowaga/react-slider