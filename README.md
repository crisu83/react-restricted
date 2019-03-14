# React Restricted

Permission-based view restrictions for React.

## Requirements

- React >= 16.8.0
- React Router >= 4.0.0

## Install

```sh
yarn add react-restricted react react-dom react-router react-router-dom
```

## Usage

### RestrictedView component

```ts
import { RestrictedProvider, RestrictedView } from "react-restricted";

function ViewExample() {
  return (
    <RestrictedProvider permissions={["somePermission"]}>
      <RestrictedView requiredPermission="somePermission">
        <SomeComponent />
      </RestrictedView>
    </RestrictedProvider>
  );
}
```

### RestrictedRoute component

```ts
import { RestrictedProvider, RestrictedRoute } from "react-restricted";

function RouteExample() {
  return (
    <RestrictedProvider permissions={["somePermission"]}>
      <Switch>
        <RestrictedRoute
          path="/some-path"
          requiredPermission="somePermission"
          component={SomeComponent}
        />
      </Switch>
    </RestrictedProvider>
  );
}
```

### RestrictedContext

```ts
import { RestrictedProvider, RestrictedConsumer } from "react-restricted";

function ContextExample() {
  return (
    <RestrictedProvider permissions={["somePermission"]}>
      <RestrictedConsumer>
        {({ hasPermission }) =>
          hasPermission("somePermission") ? <SomeComponent /> : null
        }
      </RestrictedConsumer>
    </RestrictedProvider>
  );
}
```

### useRestricted hook

```ts
import { useRestricted } from "react-restricted";

function HookExample() {
  const { hasPermission } = useRestricted();

  return hasPermission("somePermission")
    ? <SomeComponent>
    : null
}
```

## Contributing

Please read our [guidelines](.github/CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
