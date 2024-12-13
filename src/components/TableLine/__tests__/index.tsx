import { render, screen } from "@testing-library/react";
import TableLine from "..";

import User from "@/Core/UserModel";
import { AppRouterContextProviderMock } from "@/utils/RouterProviderMock";

const testUser = new User("testUserName", 9876, "userID");

describe("TableLine", () => {
  it("should display the user ID", () => {
    render(
      <AppRouterContextProviderMock router={{}}>
        <TableLine user={testUser} />
      </AppRouterContextProviderMock>
    );
    expect(screen.getByText(testUser.id.toString())).toBeInTheDocument();
  });
  it("should display the user name", () => {
    render(
      <AppRouterContextProviderMock router={{}}>
        <TableLine user={testUser} />
      </AppRouterContextProviderMock>
    );
    expect(screen.getByText(testUser.name)).toBeInTheDocument();
  });
  it("should display the user age", () => {
    render(
      <AppRouterContextProviderMock router={{}}>
        <TableLine user={testUser} />
      </AppRouterContextProviderMock>
    );
    expect(screen.getByText(testUser.age.toString())).toBeInTheDocument();
  });
  it("should have an edit button", () => {
    render(
      <AppRouterContextProviderMock router={{}}>
        <TableLine user={testUser} />
      </AppRouterContextProviderMock>
    );
    expect(screen.getByTestId("editButton")).toBeInTheDocument();
  });
  it("should have a delete button", () => {
    render(
      <AppRouterContextProviderMock router={{}}>
        <TableLine user={testUser} />
      </AppRouterContextProviderMock>
    );
    expect(screen.getByTestId("deleteButton")).toBeInTheDocument();
  });
});
