import React from 'react'
import App from './components/app'
import MainLayout from './components/main-layout'

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin


Promise.onPossiblyUnhandledRejection(err => {
    throw err
})

window.handleError = e => {
    console.error('error', e, e.stack);
    alert(e.stack);
}

window.onerror = (msg, url, line, column, e) => {
    window.handleError(e ? e : new Error(msg + '(' + url + '):' + line + '-' + column));
    return true;
}

try {
    document.addEventListener('deviceready', () => {
    	injectTapEventPlugin();
        React.render(<MainLayout />, document.body);
    }, false)
} catch (e) {
    handleError(e);
}
