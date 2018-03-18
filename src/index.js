import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './containers/App';
import reducers from './store/reducers';

const store = createStore( reducers );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
