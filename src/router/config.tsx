import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../pages/home/HomePage";
import LabelsPage from "../pages/labels/LabelsPage";
import TasksPage from "../pages/tasks/TasksPage";

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
    component: HomePage,
  },
  {
    text: "Tasks",
    path: "tasks/",
    component: TasksPage,
  },
  {
    text: "Labels",
    path: "labels/",
    component: LabelsPage,
  },
];
