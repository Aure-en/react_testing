import React from "react";
import TestHookReducer from "../components/TestHookReducer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Reducer from "../store/reducers/reducer";
import * as ACTIONS from "../store/actions/actions";

it("Text should change when button is clicked", () => {
  render(<TestHookReducer />)
  expect(screen.getByText(/stateprop1/i).textContent).toBe("stateprop1 is false");
  userEvent.click(screen.getByRole("button", { name: /dispatch success/i }));
  expect(screen.getByText(/stateprop1/i).textContent).toBe("stateprop1 is true");
})

describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(Reducer.initialState).toEqual({ stateprop1: false });
  })

  it("should change stateprop1 from false to true", () => {
    expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS)).toEqual({ stateprop1: true });
  })
})