const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const AppBar = require('material-ui/lib/app-bar');

const RecordScreen = require('./RecordScreen');

const MainLayout = React.createClass({
	changeTabs: function(tabIdx){
		this.props.value = tabIdx;
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
			<Tabs initialSelectedIndex={1} style={tabBarStyle} inkBarStyle={inkBarStyle} contentContainerStyle={tabContainerStyle}>
				<Tab value={0} label={<span><i className="ion-music-note"></i><br/>Tuneline</span>}>
					****DAN: Insert your tuneline screen here****
				</Tab>
				<Tab value={1} label={<span><i className="ion-android-microphone"></i><br/>Record</span>}>
					<RecordScreen callbackParent={this.changeTabs}/>
				</Tab>
				<Tab value={2} label={<span><i className="ion-android-person"></i><br/>Profile</span>}>
					****PROFILE/SETTINGS**
				</Tab>
			</Tabs>
			</div>
	    );
  },
});

module.exports = MainLayout;