// author: Tomáš Nereča, 2019

import * as React from 'react';

import Page from './Page';

// Root component of the app
class App extends React.Component {
    public render() {
        return (
            // This app is single page app
            <Page />
        );
    }
}

export default App;
