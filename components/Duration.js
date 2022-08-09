import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

const Duration = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Add", value: "add" },
    { label: "Subtract", value: "sub" },
    { label: "Stop", value: "stop" },
  ]);
  const [order, setOrder] = useState([
    { label: "Name", value: "name" },
    { label: "Date Modified", value: "date" },
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
    { label: "More...", value: "more" },
  ]);
  const [alarms, setAlarms] = useState([]);
  const openModal = () => {
    setOpen(!open);
  };
  return (
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
      <View>
        <MaterialIcons name="alarm" size={24} color="black" />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Text
            style={{
              borderWidth: 1.7,
              borderColor: "black",
              padding: 10,
              borderRadius: 8,
            }}
          >
            12:00 AM
          </Text>
        </TouchableOpacity>

        <Text>-</Text>
        <TouchableOpacity>
          <Text
            style={{
              borderWidth: 1.7,
              borderColor: "black",
              padding: 10,
              borderRadius: 8,
            }}
          >
            1:00 PM
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          zIndex: 50,
          elevation: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DropDownPicker
          open={open}
          value={value}
          showArrowIcon={false}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="1hr:00:00"
          style={{
            borderWidth: 1.7,
            borderColor: "black",
            padding: 10,
            backgroundColor: "#FDB8B8",
            borderRadius: 8,
            zIndex: 50,
            width: 90,
          }}
        />
      </View>
    </View>
  );
};

export default Duration;

const styles = StyleSheet.create({});
