import React, { Component } from "react";
import DateTimePicker from "../src/index";
import { View, TouchableOpacity, Text } from "react-native";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.bottomSheetRef = React.createRef();
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    this.setState({
      date: currentDate,
    });
  };

  handleCancelButtonPressed = () => {
    console.log("Handle cancel button pressed", this.state.date);
    this.bottomSheetRef.current.dismissBottomSheet();
  };

  handleConfirmButtonPressed = () => {
    console.log("Handle confirm button pressed", this.state.date);
    this.bottomSheetRef.current.dismissBottomSheet();
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
          ref={this.bottomSheetRef}
          iosBottomSheetInitialPosition="40%"
          iosBottomSheetSnapPoints={["40%", 0]}
          iosBottomSheetBackdrop={true}
          iosBottomSheetBackDropDismissByPress={false}
        />
      </View>
    );
  }
}

export default index;
