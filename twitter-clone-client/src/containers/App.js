import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>This is the beginning of a log adventure.</div>
    </Router>
  </Provider>
);

export default App;
