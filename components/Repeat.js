import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

const Repeat = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Add", value: "add" },
    { label: "Subtract", value: "sub" },
    { label: "Stop", value: "stop" },
  ]);
  const [order, setOrder] = useState([
    { label: "daily", value: "Daily" },
    { label: "ytuesday", value: "Weekly on Tuesday" },
    { label: "lastTuesday", value: "Weekly On the Last Tuesday" },
    { label: "july 26", value: "Annually on July 26" },
    { label: "weekdays", value: "Every Weekday Monday To Friday" },
    { label: "custom", value: "Custom" },
  ]);
  return (
    <View
      style={{
        Index: 50,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}> */}
      <DropDownPicker
        open={open}
        value={value}
        showArrowIcon={false}
        items={order}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setOrder}
        placeholder="1hr:00:00"
        style={{
          borderWidth: 1.7,
          borderColor: "black",
          padding: 10,
          borderRadius: 8,
          zIndex: 50,
          width: 90,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Repeat;

const styles = StyleSheet.create({});
