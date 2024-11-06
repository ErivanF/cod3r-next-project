import { render, screen } from "@testing-library/react";
import TableLine from "..";

import User from "@/Core/UserModel";

const testUser = new User("testUserName", 9876, "userID");

describe("TableLine", () => {
  it("should display the user ID", () => {
    render(<TableLine user={testUser} />);
    expect(screen.getByText(testUser.id.toString())).toBeInTheDocument();
  });
  it("should display the user name", () => {
    render(<TableLine user={testUser} />);
    expect(screen.getByText(testUser.name)).toBeInTheDocument();
  });
  it("should display the user age", () => {
    render(<TableLine user={testUser} />);
    expect(screen.getByText(testUser.age.toString())).toBeInTheDocument();
  });
  it("should have an edit button", () => {
    render(<TableLine user={testUser} />);
    expect(screen.getByTestId("editButton")).toBeInTheDocument();
  });
  it("should have a delete button", () => {
    render(<TableLine user={testUser} />);
    expect(screen.getByTestId("deleteButton")).toBeInTheDocument();
  });
});
