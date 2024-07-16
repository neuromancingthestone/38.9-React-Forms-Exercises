import {act} from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

test('It renders without crashing', () => {
  render(<Box 
    id={1}
    color={'teal'}
    width={'50px'}
    height={'50px'}
  />)
})

test('It matches snapshot', () => {
  const {asFragment} = render(<Box 
    id={1}
    color={'teal'}
    width={'50px'}
    height={'50px'}  
  />)
  expect(asFragment()).toMatchSnapshot();
})