import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Bus from "../components/example/Bus";
import Cart from "../components/example/Cart";
import Count from "../components/example/Count";
import Home from "../components/example/Home";
import Sandwiches from "../components/example/Sandwiches";
import Tacos from "../components/example/Tacos";
import LabelsPage from "../pages/labels/labels";
import TasksPage from "../pages/tasks/tasks";

export { PrivateRouteConfig as PublicRouteConfig };
export type { IRoute };

interface IRoute {
  text: string;
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
  icon?: IconDefinition;
  routes?: IRoute[];
}

const PrivateRouteConfig: IRoute[] = [
  {
    text: "Home",
    path: "/",
    exact: true,
    component: Sandwiches,
  },
  {
    text: "Tasks",
    path: "/tasks",
    component: TasksPage,
  },
  {
    text: "Labels",
    path: "/labels",
    component: LabelsPage,
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
      },
      {
        text: "Cart",
        path: "/tacos/cart",
        component: Cart,
      },
      {
        text: "Count",
        path: "/tacos/count",
        component: Count,
      },
    ],
  },
];
