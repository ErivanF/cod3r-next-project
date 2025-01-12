import Button from "..";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render a button with the provided text", () => {
    render(<Button>Testing button</Button>);
    const button = screen.getByText("Testing button");
    expect(button).toBeInTheDocument();
  });
  it("should run the onClick function", () => {
    const clickTest = jest.fn();
    render(<Button handleClick={clickTest}>Testing button</Button>);
    const button = screen.getByText("Testing button");
    fireEvent.click(button);
    expect(clickTest).toHaveBeenCalled();
  });
});
