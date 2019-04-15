import React, { Component } from 'react';
import './Platform.css';
import {
  BrowserRouter,
  Route, Switch, Redirect
} from 'react-router-dom';
import Landing from './Landing/Landing';
import { Provider } from "react-redux";
import store from "./redux-helper/store/index";

class Platform extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/landing/' component={Landing}/>
              <Route exact path="/" render={() => (
                <Redirect to='/landing'/>
              )}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Platform;
