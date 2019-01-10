import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter 
} from 'react-router-dom'

// Main view with router and paths
import Main from './views/Main';

// Styling imports
import './App.scss';

// Import reducer for store
import reducer from './reducers'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
