import { render, screen } from "@testing-library/react";
import Popup from "./Popup";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Popup></Popup>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Popup></Popup>);
});
it("matches snapshot", () => {
  const tree = renderer.create(<Popup></Popup>).toJSON();
  expect(tree).toMatchSnapshot();
});
