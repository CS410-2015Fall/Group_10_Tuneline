
const React = require('react');
const SoundbiteData = require('./Database');


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
    render: function () {
        return (
            <li>
                <a href={"#soundbites/" + this.props.soundbite.datetime}>
                    {this.props.soundbite.name}
                </a>
            </li>
        );
    }
});

var SoundbiteList = React.createClass({
    render: function () {
        var items = this.props.soundbites.map(function (soundbite) {
            return (
                <SoundbiteListItem key={soundbite.datetime} soundbite={soundbite} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});

var TunelineHome = React.createClass({
    getInitialState: function() {
        return {sounds: []}
    },
    /*
    searchHandler:function(key) {
        this.props.service.findByName(key).done(function(result) {
            this.setState({searchKey: key, soundbites: result});
        }.bind(this));
    },*/
    getSoundBytes: function(){
        SoundbiteData.getSounds(function(soundbites){
            this.setState({
                sounds: soundbites
            });
        }.bind(this));
    },

    render: function () {
        this.getSoundBytes();

        return (
            <div>
                <SoundbiteList key="soundbyteList" soundbites={this.state.sounds}/>
            </div>
        );
    }
});


module.exports = TunelineHome;
