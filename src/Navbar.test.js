import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar></Navbar>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Navbar></Navbar>);
});
it("matches snapshot", () => {
  const tree = renderer.create(<Navbar></Navbar>).toJSON();
  expect(tree).toMatchSnapshot();
});
