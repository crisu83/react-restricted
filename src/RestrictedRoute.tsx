import * as React from "react";
import { Redirect, Route } from "react-router";
import RestrictedContext from "./RestrictedContext";

interface IRestrictedRouteProps {
  requiredPermission: string;
  redirectTo: string;
  component: React.ComponentType;
}

export default function RestrictedRoute({
  requiredPermission,
  redirectTo = "/",
  component,
  ...routeProps
}: IRestrictedRouteProps) {
  const { hasPermission } = React.useContext(RestrictedContext);

  const render = (props: React.ComponentProps<any>) =>
    hasPermission(requiredPermission) ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={redirectTo} />
    );

  return <Route {...routeProps} render={render} />;
}
