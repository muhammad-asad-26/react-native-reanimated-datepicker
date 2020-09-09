/**
 * @format
 */

import { AppRegistry } from "react-native";
//import IOSExample from "./example/ios.example.index"; Heptic Feedback purely native feel datepicker, with bottom sheet bounce effects
import Example from "./example/example.index";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Example);
