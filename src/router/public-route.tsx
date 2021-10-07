import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IRoute, PublicRouteConfig } from "./config";

export default function RouteConfig() {
  return (
    <Router>
      <Switch>
        {PublicRouteConfig.map((config, i) => {
          return RouteWithSubRoutes(config);
        })}
      </Switch>
    </Router>
  );
}

const RouteWithSubRoutes = (props: IRoute) => {
  console.log(props);
  return (
    <Route
      key={props.Path}
      path={props.Path}
      render={() => (
        <>
          <props.Component />
          {props.Routes ? (
            <Switch>
              {props.Routes?.map((route, i) => {
                return RouteWithSubRoutes(route);
              })}
            </Switch>
          ) : null}
        </>
      )}
    />
  );
};
