import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const rootElement = document.getElementById("root");

if (rootElement!.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

// TODO this is likely not useful right now, but may become so
serviceWorker.unregister();
