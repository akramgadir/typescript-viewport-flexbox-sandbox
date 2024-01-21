import Viewport from "../components/Viewport";
import { render } from "@testing-library/react";

describe("Viewport.tsz tests", () => {
  test("displays the correct number for the boxes", () => {
    const number = 5;
    const width = 25; 
    const height = 25;
    const { getByText } = render(<Viewport number={number} width={width} height={height}/>);
    expect(getByText(`${number}`)).toBeInTheDocument();
  })});