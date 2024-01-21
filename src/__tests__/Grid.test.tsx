import Grid from "../components/Grid";
import { render } from "@testing-library/react";

describe("Grid.tsx tests", () => {
  test("displays the right no. of viewpoints", () => {
    const rows = 3;
    const columns = 3;
    const { getAllByTestId } = render(<Grid rows={rows} columns={columns} />);
    const viewports = getAllByTestId("viewport");
    expect(viewports.length).toBe(rows*columns);
  });
});
