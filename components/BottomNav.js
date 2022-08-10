import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from "react-native";

export default class BottomNavigator extends Component {
  toggleOpen = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            backgroundColor: "white",
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={{
                  uri: "https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1660041174~hmac=90498de586b7bf2ae8233769ed029c07",
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            border: 2,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: { marginVertical: 5 },
            bottom: 0,
            width: "100%",
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri: "http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png",
                }}
                onPress={() => {
                  Alert.alert("");
                }}
              ></Image>
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Home
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginStart: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri: "http://simpleicon.com/wp-content/uploads/active-search.png",
                }}
                onPress={() => {
                  Alert.alert("click");
                }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              search{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginStart: 85,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons.flaticon.com/png/512/2529/premium/2529521.png?token=exp=1660040963~hmac=8a814de1a3963febdc4435190b4d4b56",
                }}
                onPress={() => {
                  Alert.alert("click");
                }}
                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 16 }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Notifications
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3524/3524636.png",
                }}
                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 16 }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Setting
            </Text>
          </View>

          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
  },
  actionBtn: {
    backgroundColor: "#34A853",
    padding: 20,
  },
});
