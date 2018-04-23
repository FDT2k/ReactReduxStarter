import React, { Component } from 'react';
import Login from './login';
import { BrowserRouter, Route, Switch,browserHistory} from 'react-router-dom';


export default class App extends Component {

  componentDidMount(){
    //set timeout to check session expiration ?


  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div>
          <Switch>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
