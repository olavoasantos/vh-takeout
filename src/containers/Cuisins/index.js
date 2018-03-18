import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Cuisin from './Cuisin';

class Cuisins extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/cuisins/:id' component={Cuisin}/>
        </Switch>
      </div>
    );
  }
}

export default Cuisins;
