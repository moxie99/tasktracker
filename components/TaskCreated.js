import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Icons from "react-native-heroicons/outline";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Dropdown } from "react-native-material-dropdown-v2";

const TaskCreated = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
  const data = [
    { id: 1, title: "Contact the CEO of Decagon.", bgColor: "#D9D9D9" },
    {
      id: 2,
      title: "Design the onboarding session of Task Tracker App",
      bgColor: "#CAB8FD",
    },
    {
      id: 3,
      title:
        "Remind the technical team to include the micro-interactions delivered.",
      bgColor: "#FDB8B8",
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      {/* task created title*/}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "5%",
          paddingLeft: "5%",
          marginBottom: 5,
          zIndex: 0,
        }}
      >
        <Text>Task Created</Text>
        <View
          style={{
            zIndex: 50,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <DropDownPicker
            open={open}
            value={value}
            showArrowIcon={true}
            items={order}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setOrder}
            placeholder=""
            style={{
              padding: 10,
              borderRadius: 8,
              zIndex: 50,
              width: 90,
            }}
          /> */}
          <TouchableOpacity>
            <Dropdown data={order} style={{ width: 200, height: 40 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: "5%",
                  marginLeft: "5%",
                  borderRadius: 12,
                  height: 40,
                  width: "90%",
                  backgroundColor: item.bgColor,
                  marginBottom: "1%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 10,
                  }}
                >
                  <View style={{ paddingHorizontal: 12 }}>
                    <MaterialCommunityIcons
                      name="checkbox-blank-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>{item.title}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 12,
                    }}
                  >
                    <Icons.PencilIcon
                      size={20}
                      color="black"
                      style={{ paddingLeft: 10 }}
                    />
                    <Feather
                      name="trash"
                      size={24}
                      color="black"
                      style={{ paddingLeft: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TaskCreated;

const styles = StyleSheet.create({});
