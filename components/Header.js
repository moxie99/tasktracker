import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "5%",
        paddingLeft: "5%",
      }}
    >
      <View
        style={{
          borderRadius: 50,
          borderWidth: 2,
          borderColor: "black",
          padding: "0.5%",
        }}
      >
        <TouchableOpacity>
          <Icons.ArrowLeftIcon size={12} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require("../assets/avatar.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
