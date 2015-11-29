angular.module('databaseConfig', [])
.constant('DB_CONFIG', {
    name: 'Tuneline',
    tables: [
        {
            name: 'Soundbites',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'type', type: 'text'},
                {name: 'name', type: 'text'},
                {name: 'datetime', type: 'integer not null'},
                {name: 'filename', type: 'text'},
                {name: 'url', type: 'text'},
                {name: 'tags', type: 'text'},
                {name: 'photo', type: 'text'},
                {name: 'author', type: 'text'},
                {name: 'position', type: 'text'},
                {name: 'dayofweek', type: 'integer'},
                {name: 'timeofday', type: 'integer'},
                {name: 'mediaLength', type: 'integer'}
            ]
        },
        {
            name: 'Playlists',
            columns: [
                {name: 'pid', type: 'integer primary key'},
                {name: 'name', type: 'text'}
            ]
        },
        {
            name: 'SoundbitesPlaylistMap',
            columns: [
                {name: 'sid', type: 'integer'},
                {name: 'pid', type: 'integer'}
            ]
        },
        {
            name: 'UserInfo',
            columns: [
                {name: 'fbId', type: 'integer'},
                {name: 'username', type: 'text'},
                {name: 'firstName', type: 'text'},
                {name: 'lastName', type: 'text'}
            ]
        }
    ]
});