import React from 'react';

import { render } from 'react-dom';
import App from './App.jsx';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

render(app, document.getElementById('root'));
