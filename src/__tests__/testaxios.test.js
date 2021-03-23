import React from "react";
import TestAxios from "../components/TestAxios";
import axiosMock from "axios";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it("Async axios request works", async () => {
  axiosMock.get.mockResolvedValue({ data: { title: "some title"}})
  const url = "https://jsonplaceholder.typicode.com.posts/1";
  render(<TestAxios url={url} />);
  expect(screen.getByText(/...loading/i).textContent).toBe("...Loading");

  const resolvedEl = await screen.findByTestId("title");
  expect(resolvedEl.textContent).toBe("some title");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
})