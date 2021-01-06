import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard.js'
import PrivateRoute from './components/routing/PrivateRoute';
//redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => (
   <Provider store = {store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
      </section>
    </Fragment>
  </Router>
  </Provider>
);

export default App;
