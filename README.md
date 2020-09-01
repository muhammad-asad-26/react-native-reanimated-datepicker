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

| Prop                               |       Default        |                          Type                          | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------- | :------------------: | :----------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style                              |          -           |                        `object`                        | Specify the style of the DatePicker, eg. width, height...                                                                                                                                                                                                                                                                                                                                                              |
| date                               |          -           | <code>string &#124; date &#124; Moment instance</code> | Specify the display date of DatePicker. `string` type value must match the specified format                                                                                                                                                                                                                                                                                                                            |
| mode                               |        'date'        |                         `enum`                         | The `enum` of `date`, `datetime` and `time`                                                                                                                                                                                                                                                                                                                                                                            |
| androidMode                        |      'default'       |                         `enum`                         | The `enum` of `default`, `calendar` and `spinner` (only Android)                                                                                                                                                                                                                                                                                                                                                       |
| format                             |     'YYYY-MM-DD'     |                        `string`                        | Specify the display format of the date, which using [moment.js](http://momentjs.com/). The default value change according to the mode.                                                                                                                                                                                                                                                                                 |
| confirmBtnText                     |        'Done'        |                        `string`                        | Specify the text of confirm btn in ios.                                                                                                                                                                                                                                                                                                                                                                                |
| cancelBtnText                      |       'Cancel'       |                        `string`                        | Specify the text of cancel btn in ios.                                                                                                                                                                                                                                                                                                                                                                                 |
| iconSource                         |          -           |        <code>{uri: string} &#124; number</code>        | Specify the icon. Same as the `source` of Image, always using `require()`                                                                                                                                                                                                                                                                                                                                              |
| minDate                            |          -           |            <code>string &#124; date</code>             | Restricts the range of possible date values.                                                                                                                                                                                                                                                                                                                                                                           |
| maxDate                            |          -           |            <code>string &#124; date</code>             | Restricts the range of possible date values.                                                                                                                                                                                                                                                                                                                                                                           |
| duration                           |         300          |                        `number`                        | Specify the animation duration of datepicker.                                                                                                                                                                                                                                                                                                                                                                          |
| customStyles                       |          -           |                        `object`                        | The hook of customize datepicker style, same as the native style. `dateTouchBody`, `dateInput`...                                                                                                                                                                                                                                                                                                                      |
| showIcon                           |         true         |                       `boolean`                        | Controller whether or not show the icon                                                                                                                                                                                                                                                                                                                                                                                |
| hideText                           |        false         |                       `boolean`                        | Controller whether or not show the `dateText`                                                                                                                                                                                                                                                                                                                                                                          |
| iconComponent                      |          -           |                       `element`                        | Set the custom icon                                                                                                                                                                                                                                                                                                                                                                                                    |
| disabled                           |        false         |                       `boolean`                        | Controller whether or not disable the picker                                                                                                                                                                                                                                                                                                                                                                           |
| is24Hour                           |          -           |                       `boolean`                        | Set the TimePicker is24Hour flag. The default value depend on `format`. Only work in Android                                                                                                                                                                                                                                                                                                                           |
| allowFontScaling                   |         true         |                       `boolean`                        | Set to false to disable font scaling for every text component                                                                                                                                                                                                                                                                                                                                                          |
| placeholder                        |          ''          |                        `string`                        | The placeholder show when this.props.date is falsy                                                                                                                                                                                                                                                                                                                                                                     |
| onDateChange                       |          -           |                       `function`                       | This is called when the user confirm the picked date or time in the UI. The first and only argument is a date or time string representing the new date and time formatted by [moment.js](http://momentjs.com/) with the given format property.                                                                                                                                                                         |
| onOpenModal                        |          -           |                       `function`                       | This is called when the DatePicker Modal open.                                                                                                                                                                                                                                                                                                                                                                         |
| onCloseModal                       |          -           |                       `function`                       | This is called when the DatePicker Modal close                                                                                                                                                                                                                                                                                                                                                                         |
| onPressMask                        |          -           |                       `function`                       | This is called when clicking the ios modal mask                                                                                                                                                                                                                                                                                                                                                                        |
| modalOnResponderTerminationRequest |          -           |                       `function`                       | Set the callback for React Native's [Gesture Responder System](https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle)'s call to `onResponderTerminationRequest`. By default this will reject a termination request, but can be overidden in case the View under the Modal is implementing custom gesture responders, and you wish for those to be overidden in certain cases. |
| TouchableComponent                 | `TouchableHighlight` |                      `Component`                       | Replace the `TouchableHighlight` with a custom `Component`. For example : `TouchableOpacity`                                                                                                                                                                                                                                                                                                                           |
| getDateStr                         |          -           |                        Function                        | A function to override how to format the date into a `String` for display, receives a `Date` instance                                                                                                                                                                                                                                                                                                                  |

### Property `customStyles` available keys

- appearance: `dateInput`, `disabled`, `dateTouchBody`, `dateIcon`, `placeholderText`, `dateText`
- ios select panel: `datePickerCon`, `datePicker`, `btnConfirm`, `btnTextConfirm`, `btnCancel`, `btnTextCancel`

## Instance Methods

| Method        | Params |                               Description                                |
| :------------ | :----: | :----------------------------------------------------------------------: |
| onPressDate   |   -    |                   Manually open the date picker panel                    |
| onPressCancel |   -    | Manually close the date picker panel like, similarly pressing cancel btn |
