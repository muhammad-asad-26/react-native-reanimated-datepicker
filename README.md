# rn-datepicker

React Native DatePicker component for both Android and iOS, using new react native community date & time pickers

## Install

```bash
npm install rn-datepicker --save
```

Or

```bash
yarn add rn-datepicker
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
import DateTimePicker from "../src/index";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import moment from "moment";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showDatepicker: false,
    };
  }

  onChange = (event, selectedDate) => {
    if (Platform.OS === "ios") {
      this.setState({
        date: moment(selectedDate, "YYYY-MM-DDTHH:mm:ss.sssZ").toDate(),
      });
    } else if (Platform.OS === "android") {
      //Here its a slight different to manage, because this function is called when ok or cancel button is pressed
      //Check if the selectedDate is undefined.
      if (selectedDate === undefined) {
        this.setState({
          showDatepicker: false,
        });
      } else {
        this.setState({
          date: moment(selectedDate, "YYYY-MM-DDTHH:mm:ss.sssZ").toDate(),
          showDatepicker: false,
        });
      }
    }
  };

  //NOTE: For iOS Only
  handleCancelButtonPressed = () => {
    this.setState({
      showDatepicker: false,
    });
  };

  //NOTE: For iOS Only
  handleConfirmButtonPressed = () => {
    this.setState({
      showDatepicker: false,
    });
  };

  render() {
    const { date, showDatepicker } = this.state;
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
            this.setState({
              showDatepicker: true,
            });
          }}>
          <>
            <Text style={{ textAlign: "center" }}>Open date picker</Text>
            <Text style={{ textAlign: "center" }}>
              Selected Date: {date.toDateString()}
            </Text>
          </>
        </TouchableOpacity>
        {showDatepicker && (
          <DateTimePicker
            mode="date"
            display="default"
            handleDateChanged={this.onChange}
            date={this.state.date}
            cancelBtnText="Cancel"
            handleCancelBtnPress={this.handleCancelButtonPressed}
            confirmBtnText="Done"
            handleConfirmButtonPress={this.handleConfirmButtonPressed}
            iosBottomSheetInitialPosition="40%"
            iosBottomSheetSnapPoints={["40%"]}
            iosBottomSheetBackdrop={true}
            iosBottomSheetBackDropDismissByPress={false}
          />
        )}
      </View>
    );
  }
}

export default index;

```

You can check [example folder](https://github.com/muhammad-asad-26/react-native-datepicker/tree/master/example/) for more details.

## Properties

| Prop | Default | Type | Required | Description |
| :- | :-: | :-: | :-: | :- |
| **date** | - | <code>string &#124; date | Yes | Specify the display date of DatePicker. `string` type value must match the specified `YYYY-MM-DDTHH:mm:ss.SSSZ` ISO 8601 format |
| **ref (iOS only)** | - | `React Ref` | Yes | Create a `React.createRef()` and pass it in the ref of the datepicker for iOS bottom Sheet |
| mode | 'date' | `enum` | No | The `enum` of `date`, `datetime` and `time` |
| display | 'default' | `enum` | No | The `enum` of `default`, `calendar`, `clock` and `spinner` (For Android) <br /><br /> The `enum` of `default`, `spinner`, `compact (iOS 14 only)` and `inline (iOS 14 only)` (For iOS) |
| confirmBtnText | 'Done' | `string` | No | Specify the text of confirm btn in ios. |
| cancelBtnText | 'Cancel' | `string` | No | Specify the text of cancel btn in ios. |
| minDate | - | <code>date</code> | No | Should be a date object |
| maxDate | -  | <code>date</code> | No | Should be a date object |
| minuteInterval | 0 | `number` | No | Specify the minutes interval (iOS only). |
| timeZoneOffsetInMinutes | 0 | `number` | No | Allows changing of the timeZone of the date picker. By default it uses the device's time zone. (iOS Only) 
| is24Hour | - | `boolean` | No | Set the TimePicker is24Hour flag. The default value depend on `format`. Only work in Android
| **iosBottomSheetContainerStyles (iOS only)** | - | `object` | No | iOS Bottom Sheet container styles
| **iosBottomSheetHeaderStyles (iOS only)** | - | `object` | No | iOS Bottom Sheet main header styles |
| **iosBottomSheetContentStyles (iOS only)** | - | `object` | No | iOS Bottom Sheet main content body styles |
| **iosBottomSheetInitialPosition (iOS only)** | 40% | `string` | No | iOS Bottom Sheet initial snap point, the bottom sheet will snap to this point after rendering |
| **iosBottomSheetSnapPoints (iOS only)** | ["40%"] | `Array <string | number>` | No | iOS Bottom Sheet snap points, the bottom sheet will snap onto these snap points |
| **iosBottomSheetBackdrop (iOS only)** | true | `bool` | No | iOS Bottom Sheet backdrop, which will display bottom sheet like an overlay on the screen |
| **iosBottomSheetBackDropDismissByPress (iOS only)** | false | `bool` | No | iOS Bottom Sheet will dismiss if touched out the bottom sheet |
| **iosBottomSheetCustomHeader (iOS only)** | - | `React Node` | No | You can render your own custom bottom sheet if you do not want to use the one provided in the bundle |


## Events
| Event | Required | Description |
| :- | :-: | :- |
| handleDateChanged | Yes | This event is fired when the date is changed, In this callback you can have an event and date. Now you can use these two the way you want. `onChange = (event, selectedDate)`, `function onChange(event, selectedDate)` |
| handleCancelBtnPress | Yes | You can perform any action on the cancel button is pressed, this callback will be fired by the bottom sheet. (If default header is used pass this prop)  |
| handleConfirmButtonPress | Yes | You can perform any action on the confirm/done button is pressed, this callback will be fired by the bottom sheet. (If default header is used pass this prop) |

### Bottom Sheet Methods (iOS Only)
These methods will only be provided if Ref is set for the datepicker

| Method | Params | Description |
| :- | :-: | :- |
| snapTo | number |  Bottom Sheet provides this method to snap bottom sheet to any point on the screen |
| dismissBottomSheet |   -    | Bottom Sheet provides this method to dismiss the bottom sheet |
