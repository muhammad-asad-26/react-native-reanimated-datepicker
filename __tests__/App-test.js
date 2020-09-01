/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../example/ios.example.index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<App />);
});
