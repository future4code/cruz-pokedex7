import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsPage from "../screens/DetailsPage";
import HomePage from "../screens/HomePage";
import PokedexPage from "../screens/PokedexPage";
import ErrorPage from "../screens/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>
        <Route exact path="/details/:pokename">
          <DetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
