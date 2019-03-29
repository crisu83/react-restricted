import * as React from "react";
import useRestricted from "./useRestricted";

interface IRestrictedViewProps {
  requiredPermission: string;
}

const RestrictedView: React.FunctionComponent<IRestrictedViewProps> = ({
  requiredPermission,
  children
}) => {
  const { hasPermission } = useRestricted();

  return <>{hasPermission(requiredPermission) ? children : null}</>;
};

export default RestrictedView;
