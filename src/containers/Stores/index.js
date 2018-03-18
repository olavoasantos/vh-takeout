import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Store from './Store';

class Stores extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/stores/:id' component={Store}/>
        </Switch>
      </div>
    );
  }
}

export default Stores;
