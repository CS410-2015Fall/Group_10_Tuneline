const React = require('react');
const List = require('material-ui/lib/lists/list');
const ListItem = require('material-ui/lib/lists/list-item');
const Avatar = require('material-ui/lib/avatar');
const FontIcon = require('material-ui/lib/font-icon');
const TimePicker = require('material-ui/lib/time-picker');
const TextField = require('material-ui/lib/text-field');
const Checkbox = require('material-ui/lib/checkbox');
const RaisedButton = require('material-ui/lib/raised-button');

var SearchWidget = React.createClass({
	search: function(event){
		var searchParams = this.createFilter();

		this.props.callbackParent(searchParams);
	},
	saveSearch: function(event){
		var searchParams = this.createFilter();

		this.props.callbackParent(searchParams);
	},
	createFilter(){
		var daysOfTheWeek = [];
			if(this.refs.day0.isChecked()) daysOfTheWeek.push(0);
			if(this.refs.day1.isChecked()) daysOfTheWeek.push(1);
			if(this.refs.day2.isChecked()) daysOfTheWeek.push(2);
			if(this.refs.day3.isChecked()) daysOfTheWeek.push(3);
			if(this.refs.day4.isChecked()) daysOfTheWeek.push(4);
			if(this.refs.day5.isChecked()) daysOfTheWeek.push(5);
			if(this.refs.day6.isChecked()) daysOfTheWeek.push(6);


		var searchParams = {
			filtername: this.refs.filterName.getValue(),
			date: {
				start: this.refs.fromDateField.getValue(),
				end:   this.refs.toDateField.getValue()
			},
			day: daysOfTheWeek,
			time: {
				start: this.refs.fromTime.getTime(),
				end:   this.refs.toTime.getTime()
			},
			length: {
				min: this.refs.minLength.getValue(),
				max: this.refs.maxLength.getValue()
			},
			tags: this.refs.tags.getValue(),
			name: this.refs.name.getValue(),
			photo: this.refs.photo.isChecked(),
			author: null
		};
		alert(JSON.stringify(searchParams));
		return searchParams;
	},
    render: function () {
    	var now = new Date();
		var month = (now.getMonth()<10) ? "0"+now.getMonth() : now.getMonth();
		var day = (now.getDate()<10) ? "0"+now.getDate() : now.getDate();
		var currentDate = now.getFullYear() + "-" + month + "-" + day;

		var fieldStyle = {width: '50%'};
        return (
        	<div style={{display: this.props.display}}>
	    		<TextField ref="name" hintText="Soundbite Name" floatingLabelText="Name"/>
	    		<Checkbox ref="photo" name="photo" label="Photo?"/>
	    		<TextField ref="fromDateField" style={fieldStyle} hintText="From Date" type="date" floatingLabelText="From Date" defaultValue={currentDate}/>
	    		<TextField ref="toDateField" style={fieldStyle} hintText="To Date" type="date" floatingLabelText="To Date" defaultValue={currentDate}/>
	    		<table>
	    			<tr>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day0" name="DayOfWeek" value="0" label="Su"/>
	    				</td>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day1" name="DayOfWeek" value="1" label="M"/>
	    				</td>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day2" name="DayOfWeek" value="2" label="Tu"/>
	    				</td>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day3" name="DayOfWeek" value="3" label="W"/>
	    				</td>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day4" name="DayOfWeek" value="4" label="Th"/>
	    				</td>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day5" name="DayOfWeek" value="5" label="F"/>
	    				</td>
	    				<td>
	    					<Checkbox labelPosition="left" ref="day6" name="DayOfWeek" value="6" label="Sa"/>
	    				</td>
	    			</tr>
	    		</table>
	    		<TimePicker ref="fromTime" textFieldStyle={fieldStyle} format="ampm" hintText="From Time" floatingLabelText="From Time" defaultTime={now}/>  
	    		<TimePicker ref="toTime" textFieldStyle={fieldStyle} format="ampm" hintText="To Time" floatingLabelText="To Time" defaultTime={now}/>
	    		<TextField ref="minLength" style={fieldStyle} hintText="Min. Length" floatingLabelText="Min. Length (Sec.)" type="number"/>
	    		<TextField ref="maxLength" style={fieldStyle} hintText="Max. Length" floatingLabelText="Max. Length (Sec.)" type="number"/>
	    		<TextField ref="tags" hintText="Tags" multiLine={true} rows={5} floatingLabelText="Tags"/>
	    		<RaisedButton style={fieldStyle} onClick={this.saveSearch}>
	    			<FontIcon className="fa fa-floppy-o" />
	    			Save Filter
	    		</RaisedButton>
	    		<RaisedButton style={fieldStyle} onClick={this.search}>
	    			<FontIcon className="ion-search" />
	    			Search
	    		</RaisedButton>
	    		<TextField ref="filterName" hintText="Filter Name" floatingLabelText="Filter Name"/>
            </div>
        );
    }
});

module.exports = SearchWidget;