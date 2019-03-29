import * as React from "react";

interface IRestrictedContextValue {
  hasPermission: (requiredPermission: string) => boolean;
}

const RestrictedContext = React.createContext<IRestrictedContextValue>({
  hasPermission: requiredPermission => false
});

const { Provider, Consumer } = RestrictedContext;

interface IRestrictedProviderProps {
  permissions: string[];
}

export const RestrictedProvider: React.FunctionComponent<
  IRestrictedProviderProps
> = ({ permissions, children }) => {
  const hasPermission = (requiredPermission: string): boolean =>
    permissions.indexOf(requiredPermission) !== -1;

  return <Provider value={{ hasPermission }}>{children}</Provider>;
};

export const RestrictedConsumer = Consumer;

export default RestrictedContext;
