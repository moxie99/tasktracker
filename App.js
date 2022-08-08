import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Icons from "react-native-heroicons/solid";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 15,
          paddingLeft: 15,
        }}
      >
        <View
          style={{ borderRadius: 50, borderWidth: 2, borderColor: "black" }}
        >
          <Icons.ArrowLeftIcon size={18} color="black" />
        </View>
        <View>
          <Image source={require("./assets/avatar.png")} />
        </View>
      </View>
      {/* Task title */}
      <View style={{ alignItems: "center" }}>
        <Text>Task Tracker</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 15,
        }}
      >
        <View>
          <Text>Title</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            paddingRight: 15,
          }}
        >
          <Icons.ClipboardCheckIcon
            size={20}
            color="black"
            style={{ paddingRight: 30 }}
          />
          <Icons.PencilIcon size={20} color="black" />
        </View>
      </View>

      {/* text area  */}
      <View
        style={{
          height: "35%",
          width: "90%",
          backgroundColor: "#B8FDBB",
          marginBottom: "1%",
          borderRadius: 12,
          marginLeft: "5%",
          marginRight: "5%",
          alignItems: "center",
          paddingTop: 10,
          marginTop: 12,
        }}
      >
        <Text>
          I would like to take this opportunity to thank you for providing me
          with this golden opportunity.
        </Text>
      </View>
      {/* Icons area */}
      <View
        style={{
          height: "10%",
          width: "90%",
          backgroundColor: "#B8FDBB",
          marginBottom: "1%",
          borderRadius: 12,
          marginLeft: "5%",
          marginRight: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", flex: 3 }}>
          <Feather name="image" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="color-palette-outline" size={24} color="black" />
          <MaterialCommunityIcons
            name="folder-download-outline"
            size={24}
            color="black"
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <MaterialCommunityIcons
            name="arrow-u-left-top"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            name="arrow-u-right-top"
            size={24}
            color="black"
          />
        </View>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      {/* Date Picker */}
      <View
        style={{
          paddingRight: 15,
          paddingLeft: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Feather name="clock" size={24} color="black" />
          <Text>Jul 26, 2022</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>12:00 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={24}
            color="black"
          />
          <Text>All day</Text>
        </TouchableOpacity>
      </View>

      {/* repeat section */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text>Does not repeat</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* alarm duration */}

      <View
        style={{
          paddingRight: 15,
          paddingLeft: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <MaterialIcons name="alarm" size={24} color="black" />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          <Text>-</Text>
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
        </View>
        <View
          style={{
            borderWidth: 1.7,
            borderColor: "black",
            padding: 10,
            backgroundColor: "#FDB8B8",
            borderRadius: 8,
          }}
        >
          <Text>1hr:00:00</Text>
        </View>
      </View>

      {/* task created */}

      <View>
        <Text>Task Created</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
