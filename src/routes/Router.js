
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Pokedex from "../screens/Pokedex";
import ErrorPage from "../screens/ErrorPage";


const Router = () => {
    return (
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/details">
            <Details />
          </Route>
  
          <Route exact path="/">
            <Home />
          </Route>
  
          <Route exact path="/pokedex">
            <Pokedex />
          </Route>
  
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;
