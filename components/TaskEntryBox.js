import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";

const TaskEntryBox = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "5%",
        }}
      >
        <View>
          <Text style={{ lineHeight: 27, fontSize: 18, fontWeight: "400" }}>
            Title
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "5%",
          }}
        >
          <Icons.ClipboardCheckIcon
            size={20}
            color="black"
            style={{ paddingRight: 40 }}
          />
          <Icons.PencilIcon size={20} color="black" />
        </View>
      </View>
      <View
        style={{
          height: 147,
          width: "90%",
          backgroundColor: "#B8FDBB",
          borderRadius: 12,
          marginLeft: "5%",
          marginRight: "5%",
          alignItems: "center",
          paddingTop: 10,
          marginTop: 5,
          marginBottom: 2,
        }}
      >
        <Text>
          I would like to take this opportunity to thank you for providing me
          with this golden opportunity.
        </Text>
      </View>
    </View>
  );
};

export default TaskEntryBox;

const styles = StyleSheet.create({});
