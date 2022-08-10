import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { Dropdown } from "react-native-material-dropdown-v2";

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

  const [alarmTimes, setAlarmTimes] = useState([]);

  const timeList = () => {
    let x = 15; //minutes interval
    let times = []; // time array
    let tt = 0; // start time
    let ap = ["AM", "PM"]; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = {
        value: i,
        label:
          ("0" + (hh % 12)).slice(-2) +
          ":" +
          ("0" + mm).slice(-2) +
          ap[Math.floor(hh / 12)],
      }; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }
    setAlarmTimes(times);
  };
  useEffect(() => {
    timeList();
  }, []);

  console.log(alarmTimes);

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
        </TouchableOpacity>

        <TouchableOpacity>
          <Dropdown data={alarmTimes} style={{ width: 110, height: 40 }} />
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
              justifyContent: "center",
            }}
          />
        )}
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
