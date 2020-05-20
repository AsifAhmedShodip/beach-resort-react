import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import NavigationBar from './components/NavigationBar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar> </NavigationBar>
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path='/rooms' exact component={Rooms} />
          <Route path='/rooms/:slug' exact component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
