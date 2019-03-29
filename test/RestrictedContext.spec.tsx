import * as React from "react";
import { mount } from "enzyme";
import {
  RestrictedProvider,
  RestrictedConsumer
} from "../src/RestrictedContext";

jest.unmock("../src/RestrictedContext");

describe("RestrictedContext", () => {
  it("should render correct content", () => {
    const wrapper = mount(
      <RestrictedProvider permissions={["test"]}>
        <RestrictedConsumer>
          {({ hasPermission }) =>
            hasPermission("test") ? <div>test</div> : null
          }
        </RestrictedConsumer>
      </RestrictedProvider>,
      {}
    );

    expect(wrapper.contains(<div>test</div>)).toBeTruthy();
  });
});
