import {act} from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test('It renders without crashing', () => {
  render(<BoxList />)
})

test('It matches snapshot', () => {
  const {asFragment} = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot();
})

test('It should add new box', () => {
  const container = render(<BoxList />);

  expect(container.queryByText("X")).not.toBeInTheDocument();

  const color = container.getByLabelText("Color");
  const width = container.getByLabelText("Width");
  const height = container.getByLabelText("Height");
  const btn = container.queryByText("Add Box")

  fireEvent.change(color, {target: {value: "teal"}})
  fireEvent.change(width, {target: {value: "50px"}})
  fireEvent.change(height, {target: {value: "50px"}})
  fireEvent.click(btn);

  expect(container.queryByText("X")).toBeInTheDocument(); 
})