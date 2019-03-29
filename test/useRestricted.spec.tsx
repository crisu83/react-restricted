import * as React from "react";
import { mount } from "enzyme";
import { RestrictedProvider } from "../src/RestrictedContext";
import useRestricted from "../src/useRestricted";

jest.unmock("../src/useRestricted");

describe("useRestricted", () => {
  const TestComponent: React.FunctionComponent<{}> = () => {
    const { hasPermission } = useRestricted();

    expect(typeof hasPermission).toBe("function");
    expect(typeof hasPermission("test")).toBe("boolean");

    return <>{hasPermission("test") ? <div>test</div> : null}</>;
  };

  it("should render correct content", () => {
    const wrapper = mount(
      <RestrictedProvider permissions={["test"]}>
        <TestComponent />
      </RestrictedProvider>,
      {}
    );

    expect(wrapper.contains(<div>test</div>)).toBeTruthy();
  });
});
