import { render, screen } from "@testing-library/react";
import App from "../components/App";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<App></App>);
});
it("matches snapshot", () => {
  const tree = renderer.create(<App></App>).toJSON();
  expect(tree).toMatchSnapshot();
});
