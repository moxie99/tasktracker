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
    { value: "daily", label: "Daily" },
    { value: "ytuesday", label: "Weekly on Tuesday" },
    { value: "lastTuesday", label: "Weekly On the Last Tuesday" },
    { value: "july 26", label: "Annually on July 26" },
    { value: "weekdays", label: "Every Weekday Monday To Friday" },
    { value: "custom", label: "Custom" },
  ]);
  return (
    <View
      style={{
        zIndex: 50,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <DropDownPicker
          open={open}
          value={value}
          showArrowIcon={true}
          items={order}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setOrder}
          placeholder="Does not repeat"
          style={{
            padding: 10,
            borderRadius: 8,
            zIndex: 50,
            width: 200,
            marginLeft: "20%",
            marginTop: 3,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Repeat;

const styles = StyleSheet.create({});
