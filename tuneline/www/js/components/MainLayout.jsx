const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const AppBar = require('material-ui/lib/app-bar');

const RecordScreen = require('./RecordScreen');
const TunelineScreen = require('./TunelineScreen');

const MainLayout = React.createClass({
	
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
			top: '74px',
			width: '100%',
			zIndex: '-999'
		};
		
	    return (
	    	<div>
	    	<AppBar title="Tuneline"/>
			<Tabs initialSelectedIndex={1} style={tabBarStyle} inkBarStyle={inkBarStyle} contentContainerStyle={tabContainerStyle}>
				<Tab label={<span><i className="ion-music-note"></i><br/>Tuneline</span>}>
					<TunelineScreen/>
				</Tab>
				<Tab label={<span><i className="ion-android-microphone"></i><br/>Record</span>}>
					<RecordScreen/>
				</Tab>
				<Tab label={<span><i className="ion-android-person"></i><br/>Profile</span>}>
					****PROFILE/SETTINGS**
				</Tab>
			</Tabs>
			</div>
	    );
  },
});

module.exports = MainLayout;