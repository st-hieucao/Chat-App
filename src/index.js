import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"; 
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import './stylesheets/index.scss';
import UserProvider from "./components/user-context/index.js";
import SocketProvider from "./components/socket/index.js";
 
ReactDOM.render( 
  <Provider store={store}>
    <UserProvider>
      <SocketProvider>
        <Router>
          <App />
        </Router>
      </SocketProvider>
    </UserProvider>
  </Provider>,
  document.getElementById("root")
);
