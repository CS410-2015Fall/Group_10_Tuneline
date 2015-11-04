const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const AppBar = require('material-ui/lib/app-bar');

const RecordScreen = require('./RecordScreen');
const TunelineScreen = require('./TunelineScreen');

const Database = require('./Database');

const MainLayout = React.createClass({
	getInitialState: function() {
		return {sounds:''};
	},
	changeTabs: function(tabIdx){
		this.refs.tl.getSoundBytes();
		this.refs.tabBar.setState({selectedIndex: tabIdx});
	},
	getSoundBytes:function(){
		Database.getSounds(function(soundbytes){
			this.setState({
				sounds: JSON.stringify(soundbytes)
			});
		}.bind(this));
	},
	setSounds:function(value, e, tab){
		if (e.target.textContent == "Tuneline"){
			this.refs.tl.getSoundBytes();
		}
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
	    	<AppBar title="Tuneline"/>
			<Tabs 
				ref="tabBar"
				initialSelectedIndex={1} 
				style={tabBarStyle} 
				inkBarStyle={inkBarStyle} 
				contentContainerStyle={tabContainerStyle}
				onChange={this.setSounds}>
				<Tab label={<span><i className="ion-music-note"></i><br/>Tuneline</span>}>
					<TunelineScreen ref="tl"/>
				</Tab>
				<Tab label={<span><i classN	ame="ion-android-microphone"></i><br/>Record</span>}>
					<RecordScreen callbackParent={this.changeTabs}/>
				</Tab>
				<Tab label={<span><i className="ion-android-person"></i><br/>Profile</span>}>
					
				</Tab>
			</Tabs>
			</div>
	    );
  },
});

module.exports = MainLayout;