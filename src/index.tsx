import './index.css';
import registerServiceWorker from './registerServiceWorker';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { theme } from './theme';

import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { App } from './components/app';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
