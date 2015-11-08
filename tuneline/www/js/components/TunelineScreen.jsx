const React = require('react');
const SoundbiteData = require('./Database');
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
        this.props.callbackParent(this.props.soundbite.filename);
    },
    render: function () {
        var locationObj = JSON.stringify(this.props.soundbite.location);
        return (
            <li>
                <Avatar src={'data:image/jpeg;base64,'+ this.props.soundbite.photo} />
                <a href={"#soundbites/" + this.props.soundbite.datetime} onClick={this.loadMedia}>
                    {this.props.soundbite.name}
                </a>
                <p>{locationObj}</p>
            </li>
        );
    }
});

var SoundbiteList = React.createClass({
    loadMedia: function(mediaFilePath){
        this.props.callbackParent(mediaFilePath);
    },
    render: function () {
        var items = this.props.soundbites.map(function (soundbite) {
            return (
                <SoundbiteListItem key={soundbite.datetime} soundbite={soundbite} callbackParent={this.loadMedia}/>
            );
        }.bind(this));
        return (
            <ul>
                {items}
            </ul>

        );
    }
});

var TunelineHome = React.createClass({

    getInitialState: function() {
        return {sounds: [],
                file: null,
                player: null}
    },

    /*
    searchHandler:function(key) {
        this.props.service.findByName(key).done(function(result) {
            this.setState({searchKey: key, soundbites: result});
        }.bind(this));
    },*/
    loadMedia: function(mediaFilePath){
        this.setState({player:null});
        this.forceUpdate();
        this.setState({
            player: (<MediaPlayer       key="tunelineMediaPlayer"
                                        mediaPlayerStyle={{margin:'0 5%'}}
                                        file={mediaFilePath}
                                        />)
        });
        this.forceUpdate();
    },
    getSoundBytes: function(){
        SoundbiteData.getSounds(function(soundbites){
            this.setState({
                sounds: soundbites
            });
        }.bind(this));
    },

    render: function () {
        var mediaPlayer;
        if(this.state.player)
            mediaPlayer = this.state.player;
        else
            mediaPlayer = null;
        return (
            <div>
                <SoundbiteList key="soundbyteList" soundbites={this.state.sounds} callbackParent={this.loadMedia}/>
                {mediaPlayer}
            </div>
        );
    }
});


module.exports = TunelineHome;
