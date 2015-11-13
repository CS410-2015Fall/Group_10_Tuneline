const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const Slider = require('material-ui/lib/slider');
const FontIcon = require('material-ui/lib/font-icon');

const MediaPlayer = require('./MediaPlayer');


var NowPlaying = React.createClass({
	getInitialState: function() {
		return null;
	},
	
	render() {
		var filename = null;
		if(this.props.soundbite)
			filename= this.props.soundbite.filename;
		var mediaPlayer = null;

		if(filename){
			mediaPlayer = <MediaPlayer
					key={filename}
					ref="nowPlayingMediaPlayer"
					mediaPlayerStyle={{margin:'0 5%'}}
					file={filename}
					/>
		}
	    return (
	    	<div >
	    		{mediaPlayer}
				{filename}
	    		
	    	</div>

	    );
  },
});

module.exports = NowPlaying;