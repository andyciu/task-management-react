import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface IRoute {
  Path: string;
  Component: () => JSX.Element;
  Routes?: IRoute[];
}

const PublicRouteConfig: IRoute[] = [
  {
    Path: "/sandwiches",
    Component: Sandwiches,
  },
  {
    Path: "/tacos",
    Component: Tacos,
    Routes: [
      {
        Path: "/tacos/bus",
        Component: Bus,
      },
      {
        Path: "/tacos/cart",
        Component: Cart,
      },
    ],
  },
];

export default function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {PublicRouteConfig.map((config, i) => {
            return RouteWithSubRoutes(config);
          })}
        </Switch>
      </div>
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

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos() {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

function Bus() {
  // return <h3>Bus</h3>;
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}

function Cart() {
  return <h3>Cart</h3>;
}
