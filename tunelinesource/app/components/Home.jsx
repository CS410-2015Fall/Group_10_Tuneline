import {  Reapp, 
          React, 
          NestedViewList, 
          View,
          ViewList,
          Button, 
          Bar, 
          BarItem, 
          Container,
          Scrollable } from 'reapp-kit';

var RecordScreen = require('./RecordScreen');

var tuneIcon = require('reapp-kit/node_modules/reapp-ui/assets/icons/music-note.svg');
var recordIcon = require('reapp-kit/node_modules/reapp-ui/assets/icons/mic2.svg');
var settingsIcon = require('reapp-kit/node_modules/reapp-ui/assets/icons/gear.svg');

class Home extends React.Component {

  render() {
    var barStyle = {position:'fixed',
                    bottom: '0px',
                    };
    var barItemStyle = {padding: '5px'};
    return (
      <div>
        <div>
          <NestedViewList {...this.props.viewListProps}>

            <View title="Tuneline" innerProps={Scrollable}>
              <div style={{paddingBottom:'49px',height:'5000px'}}>
                <RecordScreen/>
              </div> 
            </View>

            {this.props.child()}
          </NestedViewList>
        </div>

        <Bar style={barStyle} display='icon-text'>
          <Bar.Item style={barItemStyle} onTap={() => this.router().transitionTo('tuneline')} icon={tuneIcon}>Tuneline</Bar.Item>
          <Bar.Item style={barItemStyle} onTap={() => this.router().transitionTo('home')} icon={recordIcon}>Record</Bar.Item>
          <Bar.Item style={barItemStyle} onTap={() => this.router().transitionTo('settings')} icon={settingsIcon}>Settings</Bar.Item>
        </Bar>

        </div>

    );
  }
}

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/