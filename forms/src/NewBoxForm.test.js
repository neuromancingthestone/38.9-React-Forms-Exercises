import {act} from "react";
import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test('It renders without crashing', () => {
  render(<NewBoxForm />)
})

test('It matches snapshot', () => {
  const {asFragment} = render(<NewBoxForm />)
  expect(asFragment()).toMatchSnapshot();
})