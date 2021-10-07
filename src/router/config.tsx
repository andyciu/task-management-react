import Bus from "../components/example/Bus";
import Cart from "../components/example/Cart";
import Count from "../components/example/Count";
import Home from "../components/example/Home";
import Sandwiches from "../components/example/Sandwiches";
import Tacos from "../components/example/Tacos";

export { PublicRouteConfig };
export type { IRoute };

interface IRoute {
  Path: string;
  Component: () => JSX.Element;
  Routes?: IRoute[];
}

const PublicRouteConfig: IRoute[] = [
  {
    Path: "/",
    Component: Home,
    Routes: [
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
            Routes: [
              {
                Path: "/tacos/bus/count",
                Component: Count,
              },
            ],
          },
          {
            Path: "/tacos/cart",
            Component: Cart,
          },
        ],
      },
    ],
  },
];
