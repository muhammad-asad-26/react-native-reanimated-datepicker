# react-native-datepicker

React Native DatePicker component for both Android and iOS, using new react native community date & time pickers

## Install

```bash
npm install react-native-datepicker --save
```

Or

```bash
yarn add react-native-datepicker
```

Once the above package is installed, please install these other packages

```bash
yarn add react-native-gesture-handler
yarn add react-native-reanimated
yarn add react-native-interactable-reanimated
```

Or

```bash
npm install react-native-gesture-handler --save
npm install react-native-reanimated --save
npm install react-native-interactable-reanimated --save
```

If you have react-native-gesture-handler and react-native-reanimated already installed just install react-native-interactable-reanimated

```bash
yarn add react-native-interactable-reanimated
```

Or

```bash
npm install react-native-interactable-reanimated --save
```

## Usage

```javascript
import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
import { View, TouchableOpacity, Text } from "react-native";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.bottomSheetRef = React.createRef(); //for iOS only
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    this.setState({
      date: currentDate,
    });
  };

  handleCancelButtonPressed = () => {
    console.log("Handle cancel button pressed", this.state.date);
    this.bottomSheetRef.current.onDismissBottomSheetHandler(); //for iOS only
  };

  handleConfirmButtonPressed = () => {
    console.log("Handle confirm button pressed", this.state.date);
    this.bottomSheetRef.current.onDismissBottomSheetHandler(); //for iOS only
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}>
        <TouchableOpacity
          onPress={() => {
            this.bottomSheetRef.current.snapTo(0);
          }}>
          <Text>Open date picker</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode="date"
          display="default"
          handleDateChanged={this.onChange}
          date={this.state.date}
          cancelBtnText="Cancel"
          handleCancelBtnPress={this.handleCancelButtonPressed}
          confirmBtnText="Done"
          handleConfirmButtonPress={this.handleConfirmButtonPressed}
          ref={this.bottomSheetRef} //for iOS only
          iosBottomSheetInitialPosition="40%" //for iOS only
          iosBottomSheetSnapPoints={["40%", 0]} //for iOS only
          iosBottomSheetBackdrop={true} //for iOS only
          iosBottomSheetBackDropDismissByPress={false} //for iOS only
        />
      </View>
    );
  }
}

export default index;
```

You can check [example folder](https://github.com/muhammad-asad-26/react-native-datepicker/tree/master/example/) for more details.

## Properties

| Prop                                 |  Default   |              Type               | Required | Description                                                                                                                                                                            |
| :----------------------------------- | :--------: | :-----------------------------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date                                 |     -      |    <code>string &#124; date     |   Yes    | Specify the display date of DatePicker. `string` type value must match the specified `YYYY-MM-DDTHH:mm:ss.SSSZ` ISO 8601 format                                                        |
| mode                                 |   'date'   |             `enum`              |    No    | The `enum` of `date`, `datetime` and `time`                                                                                                                                            |
| display                              | 'default'  |             `enum`              |    No    | The `enum` of `default`, `calendar`, `clock` and `spinner` (For Android) <br /><br /> The `enum` of `default`, `spinner`, `compact (iOS 14 only)` and `inline (iOS 14 only)` (For iOS) |
| confirmBtnText                       |   'Done'   |            `string`             |    No    | Specify the text of confirm btn in ios.                                                                                                                                                |
| cancelBtnText                        |  'Cancel'  |            `string`             |    No    | Specify the text of cancel btn in ios.                                                                                                                                                 |
| minDate                              |     -      | <code>string &#124; date</code> |    No    | Restricts the range of possible date values. `string` type value must match the specified `YYYY-MM-DDTHH:mm:ss.SSSZ` ISO 8601 format                                                   |
| maxDate                              |     -      | <code>string &#124; date</code> |    No    | Restricts the range of possible date values. `string` type value must match the specified `YYYY-MM-DDTHH:mm:ss.SSSZ` ISO 8601 format                                                   |
| minuteInterval                       |     0      |            `number`             |    No    | Specify the minutes interval (iOS only).                                                                                                                                               |
| timeZoneOffsetInMinutes              |     0      |            `number`             |    No    | Allows changing of the timeZone of the date picker. By default it uses the device's time zone. (iOS Only)                                                                              |
| is24Hour                             |     -      |            `boolean`            |    No    | Set the TimePicker is24Hour flag. The default value depend on `format`. Only work in Android                                                                                           |
| iosBottomSheetContainerStyles        |     -      |            `object`             |    No    | iOS Bottom Sheet container styles                                                                                                                                                      |
| iosBottomSheetHeaderStyles           |     -      |            `object`             |    No    | iOS Bottom Sheet main header styles                                                                                                                                                    |
| iosBottomSheetContentStyles          |     -      |            `object`             |    No    | iOS Bottom Sheet main content body styles                                                                                                                                              |
| iosBottomSheetInitialPosition        |     0      |            `string`             |    No    | iOS Bottom Sheet initial snap point, the bottom sheet will snap to this point after rendering                                                                                          |
| iosBottomSheetSnapPoints             | ["40%", 0] |         `Array <string          | number>` | No                                                                                                                                                                                     | iOS Bottom Sheet snap points, the bottom sheet will snap onto these snap points |
| iosBottomSheetBackdrop               |    true    |             `bool`              |    No    | iOS Bottom Sheet backdrop, which will display bottom sheet like an overlay on the screen                                                                                               |
| iosBottomSheetBackDropDismissByPress |   false    |             `bool`              |    No    | iOS Bottom Sheet will dismiss if touched out the bottom sheet                                                                                                                          |
| iosBottomSheetCustomHeader           |     -      |          `React Node`           |    No    | You can render your own custom bottom sheet if you do not want to use the one provided in the bundle                                                                                   |
| **ref (iOS only)\***                 |     -      |           `React Ref`           |   Yes    | Create a `React.createRef()` and pass it in the ref of the datepicker for iOS bottom Sheet                                                                                             |

**\*NOTE: The datepicker will not work without passing the ref in iOS**

## Events

| Event                    | Required | Description                                                                                                                                                                                                             |
| :----------------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| handleDateChanged        |   Yes    | This event is fired when the date is changed, In this callback you can have an event and date. Now you can use these two the way you want. `onChange = (event, selectedDate)`, `function onChange(event, selectedDate)` |
| handleCancelBtnPress     |   Yes    | You can perform any action on the cancel button is pressed, this callback will be fired by the bottom sheet. (If default header is used pass this prop)                                                                 |
| handleConfirmButtonPress |   Yes    | You can perform any action on the confirm/done button is pressed, this callback will be fired by the bottom sheet. (If default header is used pass this prop)                                                           |

### Bottom Sheet Methods (iOS Only)

The methods that ref above passed ref will have

| Method             | Params | Description                                                                       |
| :----------------- | :----: | :-------------------------------------------------------------------------------- |
| snapTo             | number | Bottom Sheet provides this method to snap bottom sheet to any point on the screen |
| dismissBottomSheet |   -    | Bottom Sheet provides this method to dismiss the bottom sheet                     |
