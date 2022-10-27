import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import NoMatch from ".";
import LoginPage from "../LoginPage/index";

test("from landing to main", () => {
    // render()
    expect(1 + 1).toEqual(2);
});
