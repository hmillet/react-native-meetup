import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Settings from "../config/Settings";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Settings.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Settings.color.header
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Header;
