//to use jsx, it s mandatory to be in a tsx file
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Board from "../../../../component/kanban/component/board/Board.tsx";

//provide the routing context needed by board component
//due to useNavigate
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("board", () => {
  // clear the fake browser's localStorage
  // before each test -> it call
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("test 1 - should render the board with 3 columns", () => {
    //render the component in virtual DOM
    render(<Board />, { wrapper: Wrapper });
    //get element by text - assert it is in the screen
    expect(screen.getByText("To-do")).toBeInTheDocument();
    expect(screen.getByText("In progress")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("test 2 - call add task", async () => {
    render(<Board />, { wrapper: Wrapper });
    //emulate a user
    const user = userEvent.setup();
    // 1. Select form elements
    const titleInput = screen.getByPlaceholderText("Task title...");
    const prioritySelect = screen.getByRole("combobox");
    const addButton = screen.getByRole("button", { name: "Add" });
    // 2. Fill in the form
    await user.type(titleInput, "this is a test new task");
    await user.selectOptions(prioritySelect, "high");

    // 3. Submit
    await user.click(addButton);

    // 4. Check the task is present
    await waitFor(() => {
      expect(screen.getByText("this is a test new task")).toBeInTheDocument();
    });
  });

  it("test 3 - call move", async () => {
    render(<Board />, { wrapper: Wrapper });
    const user = userEvent.setup();

    // 1. fetch all move buttons
    const rightButtons = screen.getAllByText("→");
    const leftButtons = screen.getAllByText("←");

    // 2. "Connect API" is the first element in the DOM
    //so its index is 0
    await user.click(rightButtons[0]);

    // 3. "Create structure" is the tird element in the DOM
    //so its index is 2
    await user.click(leftButtons[2]);

    // 4. check number of elements into column 'In progress'
    const inProgressColumn = screen.getByText("In progress").parentElement!; //! assume the fact that the element is not null
    const taskItems = within(inProgressColumn).getAllByRole("listitem"); //list all li in the selected column
    expect(taskItems).toHaveLength(3);
  });

  it("test 4 - call delete", async () => {
    render(<Board />, { wrapper: Wrapper });
    const user = userEvent.setup();

    // 1. fetch all delete buttons
    const delButtons = screen.getAllByText("✕");

    // 2. "Connect API" is the first element in the DOM
    //so its index is 0
    await user.click(delButtons[0]);

    // 4. check number of elements into column 'To-do'
    const todoColumn = screen.getByText("To-do").parentElement!; //! assume the fact that the element is not null
    const taskItems = within(todoColumn).queryAllByRole("listitem"); //queryAllByRole allow null value
    expect(taskItems).toBeNull;
  });
});
