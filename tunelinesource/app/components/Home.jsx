import {  Reapp, 
          React, 
          NestedViewList, 
          View, 
          Button, 
          Bar, 
          BarItem, 
          Container } from 'reapp-kit';

var RecordButton = require('./RecordButton');

var tuneIcon = require('./icons/ios-musical-notes.svg');
var recordIcon = require('./icons/ios-mic-outline.svg');
var settingsIcon = require('./icons/ios-gear-outline.svg');

class Home extends React.Component {
  render() {
    var barStyle ={position:'fixed',
                    bottom: '0px'};
    return (
      <div>
        <div>
        <NestedViewList {...this.props.viewListProps}>
          <View title="Tuneline">
            <RecordButton/>

            <Button onTap={() => this.router().transitionTo('tuneline')}>
              Go to Tuneline
            </Button>
          </View>

          {this.props.child()}
                  

        </NestedViewList>
        </div>
        <div>
        <Bar style={barStyle} display='icon-text'>
          <Bar.Item onTap={() => this.router().transitionTo('tuneline')} icon={tuneIcon}>Tuneline</Bar.Item>
          <Bar.Item onTap={() => this.router().transitionTo('home')} icon={recordIcon}>Record</Bar.Item>
          <Bar.Item onTap={() => this.router().transitionTo('settings')} icon={settingsIcon}>Settings</Bar.Item>
        </Bar>
        </div>
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