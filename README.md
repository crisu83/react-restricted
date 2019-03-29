# React Restricted

[![Build Status](https://travis-ci.com/crisu83/react-restricted.svg?branch=master)](https://travis-ci.com/crisu83/react-restricted)

Permission-based view restrictions for React.

## Requirements

- React >= 16.8.0

## Install

```sh
yarn add react-restricted react react-dom
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

### RestrictedContext

```ts
import { RestrictedProvider, RestrictedConsumer } from "react-restricted";

function ContextExample() {
  return (
    <RestrictedProvider permissions={["somePermission"]}>
      <RestrictedConsumer>
        {({ hasPermission }) =>
          hasPermission("somePermission") ? <SomeComponent /> : <SomeOtherComponent />
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
    : <SomeOtherComponent />
}
```

## Contributing

Please read our [guidelines](.github/CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
