const React = require('react');
const List = require('material-ui/lib/lists/list');
const ListItem = require('material-ui/lib/lists/list-item');
const Avatar = require('material-ui/lib/avatar');

const MediaPlayer = require('./MediaPlayer');

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
        var locationObj = JSON.stringify(this.props.soundbite.location);
        var avatarStyle ={
            position: 'relative',
            left: '0em'
        };
        return (

            <li className="event" onClick={this.loadMedia}>
            <Avatar src={'data:image/jpeg;base64,'+ this.props.soundbite.photo} style={avatarStyle}/>              
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
        return null;
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

    render: function () {
        return (
            <div>
                <SoundbiteList key="soundbiteList" soundbites={this.props.soundbites} callbackParent={this.loadMedia}/>
            </div>
        );
    }
});


module.exports = TunelineHome;
