import React, { Component } from 'react';
import './Platform.css';
import {
  BrowserRouter,
  Route, Switch, Redirect
} from 'react-router-dom';
import Landing from './Landing/Landing';
import Mentor from './Mentor/Mentor';
import { Provider } from "react-redux";
import store from "./redux-helper/store/index";
import LanguageSelector from "./LanguageSelector/index";

class Platform extends Component {
  constructor(props){
    super(props);
  }

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
