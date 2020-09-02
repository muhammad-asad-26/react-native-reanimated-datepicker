/**
 * @format
 */

import { AppRegistry } from "react-native";
import ExampleiOS from "./example/ios.example.index";
import ExampleAndroid from "./example/ios.example.index";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => ExampleAndroid);
