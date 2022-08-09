import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import TabNavigator from "./components/BottomNav";

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
