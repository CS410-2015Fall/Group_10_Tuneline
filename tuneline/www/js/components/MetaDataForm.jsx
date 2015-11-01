const React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const TextField = require('material-ui/lib/text-field');
const FontIcon = require('material-ui/lib/font-icon');
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const TimePicker = require('material-ui/lib/time-picker');

const RecordController = require('./recordController');
const Database = require('./Database');

var MetaDataForm = React.createClass({
	getInitialState: function() {
		return {value:0};
	},
	updateTime: function(event, value){
		this.setState({
			value:value,
			image: null
			});		
	},
	takePicture: function(event){
		navigator.camera.getPicture(
			function(imageData){
				this.setState({image: imageData});
			}.bind(this), 
			function(message){
				alert(message);
			}, 
			{	
				quality: 50,
		    	destinationType: Camera.DestinationType.DATA_URL
			});
	},
	save: function(event){
		var soundBiteDate = new Date(this.refs.date.getValue());
			soundBiteDate.setTime(this.refs.time.getTime());
		var soundBite = {
			type: 'default',
			name: this.refs.name.getValue(),
			datetime: soundBiteDate,
			filename: this.props.media,
			url: this.refs.url.getValue(),
			tags: this.refs.tags.getValue(),
			photo: 'placeholder photo',
			author: 'some author id',
			location: {
				lat: 49.2602007,
				lng: -123.2501255,
				accuracy: 5,
				altitude: 0,
				name: 'location name'
			}
		};
		Database.saveSound(soundBite);
		this.props.callbackParent(0);
		return soundBite;
	},
	render() {
		var formStyle = this.props.formStyle;
		var currentDate = new Date();
	    return (
	    	<div>
	    		<TextField ref="name" hintText="Soundbite Name" floatingLabelText="Name"/>
	    		<TextField ref="date" hintText="Date" type="date" floatingLabelText="Date" defaultValue={currentDate}/>
	    		<TextField ref="url" hintText="Media URL" type="url" floatingLabelText="Medial URL"/>
	    		<TimePicker ref="time" format="ampm" hintText="Time" floatingLabelText="Time" defaultTime={currentDate}/>
	    		<TextField ref="type" hintText="Type" floatingLabelText="Type"/>
	    		<RaisedButton onClick={this.takePicture} fullWidth={true}>
	    			<FontIcon className="ion-camera" />
	    			Add Photo
	    		</RaisedButton>
	    		<img src={'data:image/jpeg;base64,'+this.state.image} width="100%" height="auto"/>
	    		<TextField ref="tags" hintText="Tags" multiLine={true} rows={5} floatingLabelText="Tags"/>
	    	</div>		

	    );
  },
});

module.exports = MetaDataForm;
