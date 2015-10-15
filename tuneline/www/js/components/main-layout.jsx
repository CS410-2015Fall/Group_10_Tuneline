const React = require('react');


const NavigationBar = require('touchstonejs/lib/ui/NavigationBar');
const View = require('touchstonejs/lib/core/View');
const ViewManager = require('touchstonejs/lib/core/ViewManager');
const UI = require('touchstonejs/lib/ui');



var lastSelectedTab = 'soundbyte'
const MainLayout = React.createClass({
	getInitialState () {
		return {
			selectedTab: lastSelectedTab
		};
	},

	onViewChange (nextView) {
		lastSelectedTab = nextView

		this.setState({
			selectedTab: nextView
		});
	},

	selectTab (value) {
		let viewProps;

		this.refs.vm.transitionTo(value, {
			transition: 'instant',
			viewProps: viewProps
		});

		this.setState({
			selectedTab: value
		})
	},	
	render() {
		let selectedTab = this.state.selectedTab
		let selectedTabSpan = selectedTab

		if (selectedTab === 'tuneline' || selectedTab === 'soundbyte' || selectedTab === 'config' ) {
			selectedTabSpan = 'soundbyte';
		}

		if (selectedTab === 'transitions' || selectedTab === 'transitions-target') {
			selectedTabSpan = 'transitions';
		}

	    return (
			<div>
				<ViewManager ref="vm" name="tabs" defaultView={selectedTab} onViewChange={this.onViewChange}>
					<View name="tuneline" component={require('./record-android')} />
					<View name="soundbyte" component={require('./record-android')} />
					<View name="config" component={require('./record-android')} />
				</ViewManager>
				<UI.Tabs.Navigator>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'tuneline')} selected={selectedTabSpan === 'tuneline'}>
						<span className="Tabs-Icon Tabs-Icon--lists" />
						<UI.Tabs.Label>Lists</UI.Tabs.Label>
					</UI.Tabs.Tab>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'soundbyte')} selected={selectedTabSpan === 'soundbyte'}>
						<span className="Tabs-Icon Tabs-Icon--forms" />
						<UI.Tabs.Label>Forms</UI.Tabs.Label>
					</UI.Tabs.Tab>
					<UI.Tabs.Tab onTap={this.selectTab.bind(this, 'config')} selected={selectedTabSpan === 'config'}>
						<span className="Tabs-Icon Tabs-Icon--controls" />
						<UI.Tabs.Label>Controls</UI.Tabs.Label>
					</UI.Tabs.Tab>
				</UI.Tabs.Navigator>
			</div>

	    );
  },
});

module.exports = MainLayout;