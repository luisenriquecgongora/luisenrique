import React from 'react';
import ReactDOM from 'react-dom';
import Platform from './Platform';
import registerServiceWorker from './registerServiceWorker';
import 'core-js';
import 'raf/polyfill';

ReactDOM.render(<Platform />, document.getElementById('root'));
registerServiceWorker();
