import TableHeader from "..";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("TableHeader", () => {
  it("should have a column forID", () => {
    render(<TableHeader />);
    expect(screen.getByText("ID")).toBeInTheDocument();
  });
  it("should have a column for name", () => {
    render(<TableHeader />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
  });
  it("should have a column for age", () => {
    render(<TableHeader />);
    expect(screen.getByText("Idade")).toBeInTheDocument();
  });
  it("should have a column for actions", () => {
    render(<TableHeader />);
    expect(screen.getByText("Ações")).toBeInTheDocument();
  });
});
