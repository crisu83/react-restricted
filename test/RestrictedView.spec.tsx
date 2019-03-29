import * as React from "react";
import { mount } from "enzyme";
import { RestrictedProvider } from "../src/RestrictedContext";
import RestrictedView from "../src/RestrictedView";

jest.unmock("../src/RestrictedView");

describe("RestrictedView", () => {
  it("should render content", () => {
    const wrapper = mount(
      <RestrictedProvider permissions={["test"]}>
        <RestrictedView requiredPermission="test">
          <div>test</div>
        </RestrictedView>
      </RestrictedProvider>,
      {}
    );

    expect(wrapper.contains(<div>test</div>)).toBeTruthy();
  });

  it("should not render content", () => {
    const wrapper = mount(
      <RestrictedProvider permissions={["test"]}>
        <RestrictedView requiredPermission="foo">
          <div>test</div>
        </RestrictedView>
      </RestrictedProvider>,
      {}
    );

    expect(wrapper.contains(<div>test</div>)).toBeFalsy();
  });
});
