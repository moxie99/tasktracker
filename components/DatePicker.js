import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Choose Date");

  const onChange = (event, selectedDate) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      monthNames[tempDate.getMonth()] +
      " " +
      tempDate.getDate() +
      ", " +
      tempDate.getFullYear();
    setText(fDate);
  };
  const showMode = (currentMode) => {
    show === false ? setShow(true) : setShow(false);
    setMode(currentMode);
  };

  return (
    <View>
      <View
        style={{
          paddingRight: "5%",
          paddingLeft: "5%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Feather name="clock" size={24} color="black" />
        <TouchableOpacity onPress={() => showMode("date")}>
          <Text>{text}</Text>
          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                styles={{
                  alignItems: "center",
                }}
              />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>12:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={24}
            color="black"
          />
          <Text style={{ padding: 3 }}>All day</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
