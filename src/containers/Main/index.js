import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../components/PrivateRoute';

import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Cuisins from '../Cuisins';
import Stores from '../Stores';
import Cart from '../Cart';
import Orders from '../Orders';

export default (props) => (
  <div className="container mx-auto bg-white border shadow min-h-full px-4" style={{paddingTop: '6rem'}}>
    <Switch>
      <PrivateRoute user={props.user} exact path='/' component={Home} />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <PrivateRoute user={props.user} exact path='/cart' component={Cart}/>
      <PrivateRoute user={props.user} path='/stores' component={Stores}/>
      <PrivateRoute user={props.user} path='/orders' component={Orders}/>
    </Switch>
  </div>
);