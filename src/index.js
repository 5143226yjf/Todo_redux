import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/route';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);
ReactDOM.render((
  <Provider store={store}>
    <Route/>
  </Provider>),
document.getElementById('app')
);
