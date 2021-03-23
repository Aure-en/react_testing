import React from "react";
import TestHook from "../components/TestHook";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

it("Text in state is changed when button clicked", () => {
  render(<TestHook />);
  expect(screen.getByText(/initial/i).textContent).toBe("Initial State");
  userEvent.click(screen.getByRole("button", { name: "State Change Button" }));
  expect(screen.getByText(/initial/i).textContent).toBe("Initial State Changed");
})

it("button click changes props", () => {
  render(
    <App />
  )
  expect(screen.getByText(/moe/i).textContent).toBe("Moe");
  userEvent.click(screen.getByRole("button", { name: "Change Name" }));
  expect(screen.getByText(/steve/i).textContent).toBe("Steve");
})