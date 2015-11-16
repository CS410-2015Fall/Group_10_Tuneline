const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const Tabs = require('material-ui/lib/tabs/tabs');
const Tab = require('material-ui/lib/tabs/tab');
const AppBar = require('material-ui/lib/app-bar');

const RecordScreen = require('./RecordScreen');
const TunelineScreen = require('./TunelineScreen');
const NowPlaying = require('./NowPlaying');

const Database = require('./Database');

const MainLayout = React.createClass({
	getInitialState: function() {
		this.getSoundBytes();
		return {sounds: null,
				nowPlayingScreen: <NowPlaying/>};
	},
	playSoundbite: function(soundbite){
		this.setState({nowPlayingScreen: <NowPlaying soundbite={soundbite}/>})
		this.changeTabs(3);
	},
	changeTabs: function(tabIdx){
		this.refs.tabBar.setState({selectedIndex: tabIdx});
	},
	getSoundBytes:function(){
		Database.getSounds(function(soundbites){
			this.setState({
				sounds: soundbites
			});
		}.bind(this));
	},
  saveSoundbite: function(soundbite){

    console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#@# Main Layout #@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#");

    var name = soundbite.name;
    var url = soundbite.url;
    var sid = soundbite.id;
    var filename = soundbite.filename
    var devicePlatform = device.platform;

    console.log("Name: " + name + " URL: " + url + " SID: " + sid + " FN: " + filename + " Device: " + devicePlatform);

    //if(new String(devicePlatform).valueOf() == new String('iOS').valueOf()) {

    if(device.platform === 'iOS'){
      console.log("########## Within iOS if statement");
      //Move from temp to cordova.file.documentsDirectory + fileName + '.wav'

      /*
      console.log("filename: " + soundbite.filename);
      console.log("tempDirectory: " + cordova.file.tempDirectory);
      console.log("documentsDirectory: " + cordova.file.documentsDirectory);

      //cordova.file.moveFile(cordova.file.tempDirectory, soundbite.filename, cordova.file.documentsDirectory, soundbite.filename);

      var file = window.resolveLocalFileSystemURL(soundbite.filename, function() { console.log("Move Successful")}, function() { console.log("Move Failed")});

      file.cordova.file.moveTo(cordova.file.documentDirectory, soundbite.filename, function() { console.log("Move Successful")}, function() { console.log("Move Failed")});


      //function moveFile(fileUri) {
      //  window.resolveLocalFileSystemURL(
      //    soundbite.filename ,
      //    function(fileEntry){
      //      newFileUri  = cordova.file.dataDirectory + "images/";
      //      oldFileUri  = soundbite.filename;
      //      fileExt     = "." + oldFileUri.split('.').pop();
      //
      //      newFileName = guid("car") + fileExt;
      //      window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
      //        function(dirEntry) {
      //          // move the file to a new directory and rename it
      //          fileEntry.moveTo(dirEntry, newFileName, successCallback, errorCallback);
      //        },
      //        errorCallback);
      //    },
      //    errorCallback);
      //}
      //
      //soundbite.filename = cordova.file.documentsDirectory + '/' + soundbite.filename;


      console.log("full filename: " + soundbite.filename);
      */
    }

    if(sid) {
      // db.save(metadata)
      console.log("### SID exists")
      Database.updateSound(soundbite);
    } else {
      // db.edit(metadata)
      console.log("### SID does not exist")
      Database.saveSound(soundbite)
    }

    this.refs.tabBar.setState({selectedIndex: 0});

  },
  setSounds:function(value, e, tab){
		this.getSoundBytes();
  },
  render() {
		var tabBarStyle = {
			position: 'fixed',
			bottom: '0px',
			width: '100%'
		};

		var inkBarStyle = {
			position: 'fixed',
			bottom: '46px'
		};

		var tabContainerStyle = {
			position: 'fixed',
			width: '100%',
			zIndex: '-999',
			overflowY: 'auto',
			marginTop: '68px',
			marginBottom: '48px',
			top: '0px',
			height: '80vh'
		};

	    return (
	    	<div>
	    	<AppBar title="Tuneline"
	    			iconElementRight={<FlatButton label="Now Playing" onClick={this.playSoundbite}/>}/>
			<Tabs
				ref="tabBar"
				initialSelectedIndex={1}
				style={tabBarStyle}
				inkBarStyle={inkBarStyle}
				contentContainerStyle={tabContainerStyle}>
				<Tab label={<span><i className="ion-music-note"></i><br/>Tuneline</span>} onActive={this.setSounds}>
					<TunelineScreen soundbites={this.state.sounds} ref="tl" key="tuneline" callbackParent={this.getSoundBytes} loadMediaToParent={this.playSoundbite}/>
				</Tab>
				<Tab label={<span><i className="ion-android-microphone"></i><br/>Record</span>}>
					<RecordScreen callbackParent={this.saveSoundbite}/>
				</Tab>
				<Tab label={<span><i className="ion-android-person"></i><br/>Profile</span>}>

				</Tab>
				<Tab style={{display:'none'}} label={<span><i className="ion-play"></i><br/>Now Playing</span>}>
					{this.state.nowPlayingScreen}
				</Tab>
			</Tabs>
			</div>
	    );
  },
});

module.exports = MainLayout;
