import * as React from "react";
import RestrictedContext from "./RestrictedContext";

interface IRestrictedViewProps {
  requiredPermission: string;
  children: React.ReactChildren;
}

function RestrictedView({
  requiredPermission,
  children
}: IRestrictedViewProps) {
  const { hasPermission } = React.useContext(RestrictedContext);
  return hasPermission(requiredPermission) ? children : null;
}

export default RestrictedView;
