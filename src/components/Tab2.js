import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

import Settings from "../config/Settings";

export default class Tab2 extends Component {
  state = {
    events: null
  };

  componentDidMount() {
    fetch(Settings.tab2.url)
      .then(response => response.json())
      .then(items => {
        console.debug(items);
        this.setState({ events: items });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderContent() {
    console.debug(this.state.events);
    if (this.state.events) {
      return (
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
        />
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
  listItem: {
    height: 80,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#aaaaaa"
  },
  name: {
    fontSize: 18
  }
});
