import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';

import './index.css';
import App from './containers/App';
import reducers from './store/reducers';

const store = createStore( reducers );

ReactDOM.render(<Provider store={store}>
  <BrowserRouter><App /></BrowserRouter>
</Provider>, document.getElementById('root'));
