import { render } from "@testing-library/react";
import { stateContext } from "./App";

const customRender = (ui, options) =>
    render(ui, { wrapper: stateContext, ...options });

export * from "@testing-library/react";

export { customRender as render };
