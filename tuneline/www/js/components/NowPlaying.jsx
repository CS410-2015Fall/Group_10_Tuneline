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
		var mediaPlayer = null;
		var reactMediaPlayer = null;
		var url;

		if(this.props.soundbite){
			if(this.props.soundbite.filename){
				mediaPlayer = <MediaPlayer
						key={this.props.soundbite.filename}
						ref="nowPlayingMediaPlayer"
						mediaPlayerStyle={{margin:'0 5%'}}
						file={this.props.soundbite.filename}
						/>
			}

			if(this.props.soundbite.url){
				reactMediaPlayer =  null
				url = this.props.soundbite.url;
			}
		}

	    return (
	    	<div >
	    		{mediaPlayer}
	    		{reactMediaPlayer}
	    		{url} 		
	    	</div>

	    );
  },
});

module.exports = NowPlaying;