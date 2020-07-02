import React from 'react';
import Home from './Pages/Home';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Repositories from './Pages/Repositories';

  export default function Routes(){
      return(
          <BrowserRouter>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/repositories' component={Repositories} />
            </Switch>
          </BrowserRouter>
         
      )
  }