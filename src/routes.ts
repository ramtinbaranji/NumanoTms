import Home from "./features/components/home";

export interface RouteTypes {
  exact: boolean;
  path: string;
  component: any;
  parentPath?: string;
}

const routes: RouteTypes[] = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
];

export default routes;
