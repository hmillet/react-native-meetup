import React, { Component } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

import Settings from "../config/Settings";

export default class Tab1 extends Component {
  state = {
    group: null
  };

  componentDidMount() {
    fetch(Settings.tab1.url)
      .then(response => response.json())
      .then(item => {
        this.setState({ group: item });
        console.debug(item);
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderContent() {
    if (this.state.group) {
      return (
        <View style={styles.container2}>
          <Image
            style={{ height: 200 }}
            resizeMode="cover"
            source={{
              uri: this.state.group.group_photo.photo_link
            }}
          />
          <Text style={styles.text1}>{this.state.group.name}</Text>
          <Text style={styles.text2}>
            Nombre de membres : {this.state.group.members}
          </Text>
          <Text style={styles.text2}>
            Catégorie : {this.state.group.meta_category.name}
          </Text>
        </View>
      );
    } else return <ActivityIndicator size="large" color="#0000ff" />;
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#cccccc",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: "#cccccc",
    justifyContent: "flex-start"
  },
  text1: {
    fontSize: 30,
    padding: 30,
    alignSelf: "center"
  },
  text2: {
    fontSize: 20,
    padding: 40,
    alignSelf: "center"
  }
});
