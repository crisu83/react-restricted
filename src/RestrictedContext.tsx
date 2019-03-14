import * as React from "react";

interface IContextValue {
  hasPermission: (requiredPermission: string) => boolean;
}

const RestrictedContext = React.createContext<IContextValue>({
  hasPermission: requiredPermission => false
});

const { Provider, Consumer } = RestrictedContext;

interface IRestrictedProviderProps {
  permissions: string[];
  children: React.ReactChildren;
}

export function RestrictedProvider({
  permissions,
  children
}: IRestrictedProviderProps) {
  const hasPermission = (requiredPermission: string): boolean =>
    permissions.indexOf(requiredPermission) !== -1;

  return <Provider value={{ hasPermission }}>{children}</Provider>;
}

export const RestrictedConsumer = Consumer;

export default RestrictedContext;
