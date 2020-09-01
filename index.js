/**
 * @format
 */

import { AppRegistry } from "react-native";
import Example from "./example/ios.example.index";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Example);
