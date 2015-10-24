const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const Slider = require('material-ui/lib/slider');
const FontIcon = require('material-ui/lib/font-icon');

const RecordController = require('./recordController');

var MediaPlayer = React.createClass({
	//Add the event listener for status changes and setup the initial state of the button
	getInitialState: function() {
		return {value:0};
	},
	updateTime:function(){
		this.setState({value:this.refs.mediaSlider.getValue()});
		
	},
	render() {
		var mediaPlayerStyle = this.props.mediaPlayerStyle;
	    return (
	    	<div style={mediaPlayerStyle}>
	    		<Slider ref="mediaSlider" onDragStop={this.updateTime} max={this.props.mediaLength}/>
				<FlatButton primary={true}>
					<FontIcon className="ion-play" />
				</FlatButton>
				<FlatButton  >
					<FontIcon className="ion-pause" />
				</FlatButton>
				<FlatButton >
					<FontIcon className="ion-stop" />
				</FlatButton>
	    	{this.state.value}
	    	</div>

	    );
  },
});

module.exports = MediaPlayer;