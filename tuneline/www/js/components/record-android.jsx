const React = require('react');
const FloatingActionButton = require('material-ui/lib/floating-action-button');

const RecordController = require('./recordcontroller');

const RecordButton = React.createClass({
	handleClick: function(event) {
		RecordController.startRecording('testFile.amr');
	},
	render() {
	    return (
	        <FloatingActionButton onClick={this.handleClick} iconClassName="muidocs-icon-action-grade" />
	    );
  },
});

module.exports = RecordButton;