import React from 'react';
import Home from './Pages/Home';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function Routes(){
      return(
          <BrowserRouter>
            <Switch>
            <Route path='/' exact component={Home} />
            </Switch>
          </BrowserRouter>
         
      )
  }