// This component handles the App template used on every page. React ecosystem
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { appCfg } from './constants/appCfg';
import App from './components/App';

ReactDOM.render(
    <App appCfg={appCfg} />, 
    document.getElementById('app')
);
