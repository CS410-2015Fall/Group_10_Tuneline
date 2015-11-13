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
		this.getLocation();
		return {value:0};
	},
	getLocation: function(){
		navigator.geolocation.getCurrentPosition(function(position){
			if(position){
				this.currentPosition={
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					accuracy: position.coords.accuracy,
					altitude: position.coords.altitude,
					name: 'default location name'
				};
			}
		}.bind(this));
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
		    	destinationType: Camera.DestinationType.DATA_URL,
		    	targetWidth: 300,
		    	targetHeight: 300,
		    	correctOrientation: true
			});
	},
	currentPosition:{
						lat: 0,
						lng: 0,
						accuracy: 0,
						altitude: 0,
						name: 'default location name'
	},
	save: function(event){

		var soundBite = this.createSoundbite();
		Database.saveSound(soundBite);
		this.props.callbackParent(0);

	},
	createSoundbite:function(){
		var soundBiteDate = new Date(this.refs.dateField.getValue());
			soundBiteDate.setTime(this.refs.time.getTime());
		var name = this.refs.name.getValue();
		if(!name){
			name = soundBiteDate.toLocaleString()
		}

		var soundBite = {
			type: 'default',
			name: name,
			datetime: soundBiteDate,
			filename: this.props.media,
			length: null,
			url: this.refs.url.getValue(),
			tags: this.refs.tags.getValue(),
			photo: this.state.image,
			author: 'some author id',
			location: this.currentPosition
		};

		return soundBite;
	},
	render() {
		var formStyle = this.props.formStyle;
		var now = new Date();
		var month = (now.getMonth()<10) ? "0"+now.getMonth() : now.getMonth();
		var day = (now.getDate()<10) ? "0"+now.getDate() : now.getDate();
		var currentDate = now.getFullYear() + "-" + month + "-" + day;
		
		var image;
		if(this.state.image){
			image = <img src={'data:image/jpeg;base64,'+this.state.image} width="100%" height="auto"/>;
		}
	    return (
	    	<div>
	    		<TextField ref="name" hintText="Soundbite Name" floatingLabelText="Name"/>
	    		<TextField ref="dateField" hintText="Date" type="date" floatingLabelText="Date" defaultValue={currentDate}/>
	    		<TextField ref="url" hintText="Media URL" type="url" floatingLabelText="Medial URL"/>
	    		<TimePicker ref="time" format="ampm" hintText="Time" floatingLabelText="Time" defaultTime={now}/>
	    		<TextField ref="type" hintText="Type" floatingLabelText="Type"/>
	    		<RaisedButton onClick={this.takePicture} fullWidth={true}>
	    			<FontIcon className="ion-camera" />
	    			Add Photo
	    		</RaisedButton>
	    		{image}
	    		<TextField ref="tags" hintText="Tags" multiLine={true} rows={5} floatingLabelText="Tags"/>
	    	</div>		

	    );
  },
});

module.exports = MetaDataForm;
