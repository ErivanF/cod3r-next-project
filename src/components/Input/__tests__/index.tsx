import { fireEvent, render, screen } from "@testing-library/react";
import Input from "..";

describe("Input", () => {
  it("should displat the input title", () => {
    render(<Input title="Title Test" />);
    const input = screen.getByText("Title Test");
    expect(input).toBeInTheDocument();
  });
  it("should update the state correctly", () => {
    const mockHandleChange = jest.fn();
    render(<Input title="Test Input" handleChange={mockOnChange} />);
    const input = screen.getByLabelText("Test Input");
    fireEvent.change(input, {
      target: { value: "InputText" },
    });
    expect(mockHandleChange).toHaveBeenCalledWith("InputText");
  });
});
