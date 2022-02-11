import { render, screen } from "@testing-library/react";
import Slider from "../components/Slider";
import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Slider></Slider>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Slider></Slider>);
});
it("matches snapshot", () => {
  const tree = renderer.create(<Slider></Slider>).toJSON();
  expect(tree).toMatchSnapshot();
});
