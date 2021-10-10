import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SubMenu from "../components/sidebar/SubMenu";
import { IRoute, PublicRouteConfig } from "./config";

export default function RouteConfig() {
  return (
    <Router>
      <Switch>
        {PublicRouteConfig.map((config, i) => {
          return RouteCompoment(config);
        })}
      </Switch>
    </Router>
  );
}

const RouteCompoment = (props: IRoute) => {
  return (
    <Route
      key={props.path}
      path={props.path}
      exact={props.exact}
      children={<props.component />}
    />
  );
};

const NavLinkCompoment = (props: IRoute) => {
  return (
    <Nav.Item>
      <Nav.Link href={props.path} className="sidebar-link">
        {props.icon ? (
          <FontAwesomeIcon icon={props.icon} className="mr-2" />
        ) : null}
        &nbsp;{props.text}
      </Nav.Link>
    </Nav.Item>
  );
};

const SubMenuCompoment = (props: IRoute) => {
  return (
    <SubMenu
      title={props.text}
      icon={props.icon ?? faCopy}
      items={props.routes!}
    />
  );
};

const RouteContent = () => {
  const subCompoment = (route: IRoute) => {
    const elements: JSX.Element[] = [];
    elements.push(RouteCompoment(route));
    route.routes?.map((routesub, k) => {
      elements.push(RouteCompoment(routesub));
    });
    return elements;
  };

  const totalCompoment = () => {
    const elements: JSX.Element[] = [];
    PublicRouteConfig.map((route, i) => {
      const subElements = subCompoment(route);
      elements.push(...subElements);
    });

    return elements;
  };

  return <Switch>{totalCompoment()}</Switch>;
};

const RouteSideBar = () => {
  const subCompoment = (route: IRoute) => {
    const elements: JSX.Element[] = [];
    if (route.routes) {
      elements.push(SubMenuCompoment(route));
    } else {
      elements.push(NavLinkCompoment(route));
    }
    return elements;
  };

  const totalCompoment = () => {
    const elements: JSX.Element[] = [];
    PublicRouteConfig.map((route, i) => {
      const subElements = subCompoment(route);
      elements.push(...subElements);
    });

    return elements;
  };

  return <>{totalCompoment()}</>;
};

export { RouteContent, RouteSideBar };
