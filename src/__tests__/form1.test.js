import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form1 from "../components/Form1";

describe("Form works as intended", () => {
  it("Changes the input when the user writes", () => {
    render(<Form1 />);
    const input = screen.getByLabelText(/input text:/i);
    userEvent.type(input, "Text");
    expect(screen.getByText(/change: /i).textContent).toBe("Change: Text");
  });

  it("Submits the form properly", () => {
    render(<Form1 />);
    expect(screen.getByText(/submit value/i).textContent).toBe("Submit Value: ");
    const input = screen.getByLabelText(/input text:/i);
    userEvent.type(input, "Text");
    const submit = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submit);
    expect(screen.getByText(/submit value/i).textContent).not.toBe("Submit Value: ");
  })

})