import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const IconArea = () => {
  return (
    <View
      style={{
        height: 46,
        width: "90%",
        backgroundColor: "#B8FDBB",
        borderRadius: 12,
        marginLeft: "5%",
        marginRight: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "1%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 3 }}>
        <Feather
          name="image"
          size={24}
          color="black"
          style={{ paddingLeft: "3%" }}
        />
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          style={{ paddingLeft: "3%" }}
        />
        <Ionicons name="color-palette-outline" size={24} color="black" />
        <MaterialCommunityIcons
          name="folder-download-outline"
          size={24}
          color="black"
          style={{ paddingLeft: "3%" }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <MaterialCommunityIcons
          name="arrow-u-left-top"
          size={24}
          color="black"
          style={{ paddingLeft: "3%" }}
        />
        <MaterialCommunityIcons
          name="arrow-u-right-top"
          size={24}
          color="black"
          style={{ paddingLeft: "3%" }}
        />
      </View>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          style={{ paddingLeft: "3%", paddingRight: "3%" }}
        />
      </View>
    </View>
  );
};

export default IconArea;

const styles = StyleSheet.create({});
