const React = require('react');
const List = require('material-ui/lib/lists/list');
const ListItem = require('material-ui/lib/lists/list-item');
const Avatar = require('material-ui/lib/avatar');
const RaisedButton = require('material-ui/lib/raised-button');
const FontIcon = require('material-ui/lib/font-icon');

const MediaPlayer = require('./MediaPlayer');
const SearchWidget = require('./SearchWidget');

var SearchBar = React.createClass({
    getInitialState: function() {
        return {searchKey: ""};
    },
    searchHandler: function(event) {
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    },
    render: function () {
        return (
            <input type="search" />
        );
        return (
            <input type="search" value={this.state.symbol} onChange={this.searchHandler}/>
        );
    }
});


var SoundbiteListItem = React.createClass({
    loadMedia: function(){
        this.props.callbackParent(this.props.soundbite);
    },
    render: function () {
        var defaultImage = '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';
        var locationObj = JSON.stringify(this.props.soundbite.location);
        var imageString = defaultImage;
        if(this.props.soundbite.photo && this.props.soundbite.photo != 'undefined'){
            imageString = this.props.soundbite.photo;
        }
        var avatarStyle ={
            position: 'relative',
            left: '0em'
        };
        return (

            <li className="event" onClick={this.loadMedia}>
            <Avatar src={'data:image/jpeg;base64,'+ imageString} style={avatarStyle}/>              
                <p className="dates">{this.props.soundbite.datetime}</p>
                <a className="title">
                    {this.props.soundbite.name}
                </a>
                <p className="description">{this.props.soundbite.tags}</p>
                <p>{locationObj}</p>
            </li>
            
        );
    }
});

var SoundbiteList = React.createClass({
    loadMedia: function(soundbite){
        this.props.callbackParent(soundbite);
    },
    render: function () {
        if(!this.props.soundbites)
            return null;
        var items = this.props.soundbites.map(function (soundbite) {
            return (
                <SoundbiteListItem key={soundbite.datetime} soundbite={soundbite} callbackParent={this.loadMedia}/>
            );
        }.bind(this));
        return (
            <ol className="timeline">
                {items}
            </ol>

        );
    }
});

var TunelineHome = React.createClass({
    getInitialState: function() {
        return {searchDisplay: 'none'};
    },

    /*
    searchHandler:function(key) {
        this.props.service.findByName(key).done(function(result) {
            this.setState({searchKey: key, soundbites: result});
        }.bind(this));
    },*/
    loadMedia: function(soundbite){
        this.props.loadMediaToParent(soundbite);
    },
    toggleSearch: function(event){
        if(this.state.searchDisplay == 'none')
            this.setState({searchDisplay: 'block'});
        else this.setState({searchDisplay: 'none'});
    },
    search: function(searchParamsObj){
        this.props.callbackParent(searchParamsObj);
    },
    render: function () {

        return (
            <div>
                <RaisedButton onClick={this.toggleSearch} fullWidth={true}>
                    <FontIcon className="ion-search" />
                    Search/Filter
                </RaisedButton>
                <SearchWidget key="searchWidget"
                                ref="searchWidget"
                                display={this.state.searchDisplay}
                                callbackParent={this.search}/>
                <SoundbiteList key="soundbiteList" soundbites={this.props.soundbites} callbackParent={this.loadMedia}/>
            </div>
        );
    }
});


module.exports = TunelineHome;
