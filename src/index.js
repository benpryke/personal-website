import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// TODO this is likely not useful right now, but may become so
serviceWorker.unregister();
