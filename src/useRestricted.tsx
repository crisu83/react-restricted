import * as React from "react";
import RestrictedContext from "./RestrictedContext";

export default function useRestricted() {
  const { hasPermission } = React.useContext(RestrictedContext);
  return { hasPermission };
}
