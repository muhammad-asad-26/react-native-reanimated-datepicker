import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Platform, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import BottomSheet from "./components/bottomSheet";
import HOC from "./components/refsHoc";
import moment from "moment";

const FORMATS = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:mm",
  time: "HH:mm",
};

class index extends Component {
  getDate(date = this.props.date) {
    const { mode, minDate, maxDate, format = FORMATS[mode] } = this.props;
    if (!date) {
      let now = new Date();
      if (minDate) {
        let _minDate = this.getDate(minDate);
        if (now < _minDate) {
          return _minDate;
        }
      }
      if (maxDate) {
        let _maxDate = this.getDate(maxDate);
        if (now > _maxDate) {
          return _maxDate;
        }
      }
      return now;
    }
    if (date instanceof Date) {
      return date;
    }
    return moment(date, format).toDate();
  }

  render() {
    const {
      mode,
      minDate,
      maxDate,
      minuteInterval,
      timeZoneOffsetInMinutes,
      display,
      is24Hour,
      handleDateChanged,
      date,
      cancelBtnText,
      handleCancelBtnPress,
      confirmBtnText,
      handleConfirmButtonPress,
      iosBottomSheetCustomHeader,
      iosBottomSheetContainerStyles,
      iosBottomSheetHeaderStyles,
      iosBottomSheetContentStyles,
      forwardRef,
      iosBottomSheetInitialPosition,
      iosBottomSheetSnapPoints,
      iosBottomSheetBackdrop,
      iosBottomSheetBackDropDismissByPress,
    } = this.props;
    let minDateValue = minDate && this.getDate(minDate);
    let maxDateValue = maxDate && this.getDate(maxDate);
    if (Platform.OS === "ios") {
      return (
        <BottomSheet
          bottomSheerColor="#FFFFFF"
          ref={forwardRef}
          initialPosition={iosBottomSheetInitialPosition}
          snapPoints={iosBottomSheetSnapPoints}
          isBackDrop={iosBottomSheetBackdrop}
          isBackDropDismissByPress={iosBottomSheetBackDropDismissByPress}
          isRoundBorderWithTipHeader={false}
          containerStyle={{
            backgroundColor: "#fff",
            ...iosBottomSheetContainerStyles,
          }}
          headerStyle={{ ...iosBottomSheetHeaderStyles }}
          bodyStyle={{
            flex: 1,
            backgroundColor: "rgba(226, 226, 226, 0.7)",
            ...iosBottomSheetContentStyles,
          }}
          header={
            iosBottomSheetCustomHeader ? (
              iosBottomSheetCustomHeader
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Button
                  onPress={handleCancelBtnPress}
                  title={cancelBtnText ? cancelBtnText : "Cancel"}
                />
                <Button
                  onPress={handleConfirmButtonPress}
                  title={confirmBtnText ? confirmBtnText : "Done"}
                />
              </View>
            )
          }
          body={
            <DateTimePicker
              value={date}
              is24Hour={is24Hour === undefined ? false : is24Hour}
              display={display ? display : "default"}
              onChange={handleDateChanged}
              date={date}
              mode={mode ? mode : "datetime"}
              minimumDate={minDateValue}
              maximumDate={maxDateValue}
              minuteInterval={minuteInterval ? minuteInterval : null}
              timeZoneOffsetInMinutes={
                timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : null
              }
            />
          }
        />
      );
    } else if (Platform.OS === "android") {
      return (
        <DateTimePicker
          value={date}
          is24Hour={is24Hour === undefined ? false : is24Hour}
          display={display ? display : "default"}
          onChange={handleDateChanged}
          date={date}
          mode={mode ? mode : "date"}
          minimumDate={minDateValue}
          maximumDate={maxDateValue}
          minuteInterval={minuteInterval ? minuteInterval : null}
          timeZoneOffsetInMinutes={
            timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : null
          }
        />
      );
    } else if (Platform.OS === "web") {
      <View>
        <Text>
          Web Date-Picker is not implemented, Feel free to contribute in this
          package
        </Text>
      </View>;
    } else {
      <View>
        <Text>
          This is will only happens, if Platform.OS adds more OS compatibilites
        </Text>
      </View>;
    }
  }
}

index.defaultProps = { androidMode: "default" };

index.propTypes = {
  date: PropTypes.object.isRequired || PropTypes.string.isRequired,
  handleDateChanged: PropTypes.func.isRequired,
  handleCancelBtnPress:
    Platform.OS === "ios" ? PropTypes.func.isRequired : PropTypes.func,
  handleConfirmButtonPress:
    Platform.OS === "ios" ? PropTypes.func.isRequired : PropTypes.func,
  mode: PropTypes.string,
  display: PropTypes.string,
  cancelBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  minuteInterval: PropTypes.number,
  timeZoneOffsetInMinutes: PropTypes.number,
  is24Hour: PropTypes.bool,
  iosBottomSheetContainerStyles: PropTypes.object,
  iosBottomSheetHeaderStyles: PropTypes.object,
  iosBottomSheetContentStyles: PropTypes.object,
  iosBottomSheetInitialPosition:
    Platform.OS === "ios" ? PropTypes.string.isRequired : PropTypes.string,
  iosBottomSheetSnapPoints:
    Platform.OS === "ios" ? PropTypes.array.isRequired : PropTypes.array,
  iosBottomSheetBackdrop:
    Platform.OS === "ios" ? PropTypes.bool.isRequired : PropTypes.bool,
  iosBottomSheetBackDropDismissByPress: PropTypes.bool,
};

export default HOC(index);
