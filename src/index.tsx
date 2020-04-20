import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { EnvironmentContext } from './context/environment';
import { mainReducer } from './redux/reducer';

const store = createStore(mainReducer);

const environment = 'PROD'; // retrieve from config/URL...

ReactDOM.render(
  <React.StrictMode>
    <EnvironmentContext.Provider value={environment}>
      <Provider store={store}>
        <App />
      </Provider>
    </EnvironmentContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
