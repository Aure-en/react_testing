import React from "react"
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

it("Text in state is changed when button clicked", () => {
  render(<App />);
  expect(screen.getByText(/some text/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Change Text"}));
  expect(screen.getByText(/some other text/i)).toBeInTheDocument();
})