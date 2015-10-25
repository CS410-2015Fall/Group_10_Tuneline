const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const TextField = require('material-ui/lib/text-field');
const FontIcon = require('material-ui/lib/font-icon');
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const TimePicker = require('material-ui/lib/time-picker');



const RecordController = require('./recordController');

var MetaDataForm = React.createClass({
	//Add the event listener for status changes and setup the initial state of the button
	getInitialState: function() {
		return {value:0};
	},
	updateTime:function(event, value){
		this.setState({value:value});
		
	},
	save: function(event){
		var soundByte = {
			type: 'default',
			name: 'My soundbyte',
			datetime: new Date(),
			filename: this.props.fileName,
			url: 'http://example.com',
			tags: ['#tags','#yoloswaggy','#fomo'],
			photo: 'some photo name',
			author: 'some author id',
			location: {
				lat: 49.2602007,
				lng: -123.2501255,
				accuracy: 5,
				altitude: 0,
				name: 'location name'
			}
		};
	},
	render() {
		var formStyle = this.props.formStyle;
		var currentDate = new Date();
	    return (
	    	<div>
	    		<TextField ref="name" hintText="SoundByte Name" floatingLabelText="Name"/>
	    		<TextField ref="type" hintText="Date" type="date" floatingLabelText="Date"/>
	    		<TimePicker format="ampm" hintText="Time" floatingLabelText="Time" defaultTime={currentDate}/>
	    		<TextField ref="type" hintText="Type" floatingLabelText="Type"/>	    		
	    		<TextField ref="tags" hintText="Tags" multiLine={true} rows={5} floatingLabelText="Tags"/>

	    	</div>		

	    );
  },
});

module.exports = MetaDataForm;
