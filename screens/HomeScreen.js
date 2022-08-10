import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import TaskEntryBox from "../components/TaskEntryBox";
import IconArea from "../components/IconArea";
import DatePicker from "../components/DatePicker";
import Repeat from "../components/Repeat";
import Duration from "../components/Duration";
import TaskCreated from "../components/TaskCreated";
import Tasks from "../components/Tasks";
import ViewOverflow from "react-native-view-overflow";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      {/* Header */}
      <Header />
      {/* App Title */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "600", lineHeight: 30 }}>
          Task Tracker
        </Text>
      </View>
      {/* Task Entry Box */}
      <TaskEntryBox />
      {/* IconArea */}
      <IconArea />
      {/* Date Picker */}
      <DatePicker />
      {/* Repeat */}
      <Repeat />
      {/* Duration */}
      <ViewOverflow>
        <Duration />
      </ViewOverflow>
      {/* Task Created */}
      <TaskCreated />
      {/* Tasks */}
      <Tasks />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
