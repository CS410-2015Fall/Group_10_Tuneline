const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const AppBar = require('material-ui/lib/app-bar');

const RecordScreen = require('./RecordScreen');
const TunelineScreen = require('./TunelineScreen');
const NowPlaying = require('./NowPlaying');

const Database = require('./Database');

const MainLayout = React.createClass({
	getInitialState: function() {
		this.getSoundBytes();
		return {sounds:'',
				nowPlayingScreen: <NowPlaying/>};
	},
	playSoundbite: function(soundbite){
		this.setState({nowPlayingScreen: <NowPlaying soundbite={soundbite}/>})
		this.changeTabs(3);
	},
	changeTabs: function(tabIdx){
		this.refs.tabBar.setState({selectedIndex: tabIdx});
	},
	getSoundBytes:function(){
		Database.getSounds(function(soundbites){
			this.setState({
				sounds: soundbites
			});
		}.bind(this));
	},
	setSounds:function(value, e, tab){
		this.getSoundBytes();
	},
	render() {
		var tabBarStyle = {
			position: 'fixed',
			bottom: '0px',
			width: '100%'
		};

		var inkBarStyle = {
			position: 'fixed',
			bottom: '46px'
		};

		var tabContainerStyle = {
			position: 'fixed',
			width: '100%',
			zIndex: '-999',
			overflowY: 'auto',
			marginTop: '68px',
			marginBottom: '48px',
			top: '0px',
			height: '80vh'
		};
		
	    return (
	    	<div>
	    	<AppBar title="Tuneline"
	    			iconElementRight={<FlatButton label="Now Playing" onClick={this.playSoundbite}/>}/>
			<Tabs 
				ref="tabBar"
				initialSelectedIndex={1} 
				style={tabBarStyle} 
				inkBarStyle={inkBarStyle} 
				contentContainerStyle={tabContainerStyle}>
				<Tab label={<span><i className="ion-music-note"></i><br/>Tuneline</span>} onActive={this.setSounds}>
					<TunelineScreen soundbites={this.state.sounds} ref="tl" loadMediaToParent={this.playSoundbite}/>
				</Tab>
				<Tab label={<span><i className="ion-android-microphone"></i><br/>Record</span>}>
					<RecordScreen callbackParent={this.changeTabs}/>
				</Tab>
				<Tab label={<span><i className="ion-android-person"></i><br/>Profile</span>}>
					
				</Tab>
				<Tab style={{display:'none'}} label={<span><i className="ion-play"></i><br/>Now Playing</span>}>
					{this.state.nowPlayingScreen}
				</Tab>
			</Tabs>
			</div>
	    );
  },
});

module.exports = MainLayout;