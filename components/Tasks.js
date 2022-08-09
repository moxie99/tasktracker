import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Tasks = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "5%",
        paddingLeft: "5%",
        marginTop: 5,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/task1.png")} />
        <Text>Task 1</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/task2.png")} />
        <Text>Task 2</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/task3.png")} />
        <Text>Task 3</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/task4.png")} />
        <Text>Task 4</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/task5.png")} />
        <Text>Task 5</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          padding: "2%",
          borderRadius: 20,
          backgroundColor: "#e6ffe6",
        }}
      >
        <Image source={require("../assets/task6.png")} />
        <Text>Task 6</Text>
      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
