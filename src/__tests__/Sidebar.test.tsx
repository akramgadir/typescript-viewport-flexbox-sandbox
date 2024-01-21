import Sidebar from "../components/Sidebar";
import { render } from "@testing-library/react";

describe("Sidebar.tsx tests", () => {
  test("renders rows and columns inputs with the values given", () => {
    const rows = 5;
    const columns = 5;
    const { getByTestId } = render(
      <Sidebar 
        showSidebar={true} 
        toggleSidebar={() => {}} 
        rows={rows} 
        columns={columns} 
        setRows={() => {}} 
        setColumns={() => {}} 
      />
    );
    const rowsInput = getByTestId("rows-input");
    const columnsInput = getByTestId("columns-input");
    expect(rowsInput.value).toBe(rows.toString());
    expect(columnsInput.value).toBe(columns.toString());
  });
});
