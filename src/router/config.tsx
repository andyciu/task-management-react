import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Bus from "../components/example/Bus";
import Cart from "../components/example/Cart";
import Count from "../components/example/Count";
import Home from "../components/example/Home";
import Sandwiches from "../components/example/Sandwiches";
import Tacos from "../components/example/Tacos";

export { PublicRouteConfig };
export type { IRoute };

interface IRoute {
  text: string;
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
  icon?: IconDefinition;
  routes?: IRoute[];
}

const PublicRouteConfig: IRoute[] = [
  {
    text: "Home",
    path: "/",
    exact: true,
    component: Sandwiches,
  },
  {
    text: "Sandwiches",
    path: "/sandwiches",
    component: Sandwiches,
  },
  {
    text: "Tacos",
    path: "/tacos",
    exact: true,
    component: Tacos,
    routes: [
      {
        text: "Bus",
        path: "/tacos/bus",
        component: Bus,
        routes: [
          {
            text: "Count",
            path: "/tacos/bus/count",
            component: Count,
          },
        ],
      },
      {
        text: "Cart",
        path: "/tacos/cart",
        component: Cart,
      },
    ],
  },
];
