import React from "react";
import ReactDOM from "react-dom";
import Basic from "../components/Basic";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter() });

it("renders correctly enzyme", () => {
  const wrapper = shallow(<Basic />)
  expect(toJson(wrapper)).toMatchSnapshot();
})