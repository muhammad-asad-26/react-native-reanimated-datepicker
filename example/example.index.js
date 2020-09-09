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
