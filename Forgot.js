import { firebase } from "firebase";
import { auth } from "./App";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Forgot extends React.Component {
  constructor() {
    super();
    this.state = { emailid: "", password: "" };
  }

  press = () => {
    auth
      .sendPasswordResetEmail(this.state.emailid)
      .then(function (user) {
        alert("Please check Email");
      })
      .catch(function (e) {
        alert(e);
      });
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: "5%", marginLeft: 2 }}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            color={"rgba(28, 15, 255, 0.5)"}
            size={30}
            name={"arrow-left"}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Enter Your Email-Id</Text>
        </View>
        <View style={styles.inputcheck}>
          <TextInput
            value={this.state.emailid}
            keyboardType="email-address"
            onChangeText={(text) => this.setState({ emailid: text })}
            theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
            style={styles.input}
            label="Email"
          />
        </View>
        <View style={styles.touchContainer}>
          <TouchableOpacity onPress={this.press} style={styles.touch}>
            <Text style={styles.otpText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgimg: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    marginTop: "20%",
    marginLeft: 5,
  },
  text: {
    color: "#000",
    fontSize: 20,
    textAlign: "justify",
    fontWeight: "bold",
  },
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 30,
  },
  input: {
    backgroundColor: "#fff",
  },
  touchContainer: {
    alignItems: "center",
    marginTop: "5%",
  },
  touch: {
    backgroundColor: "rgba(28, 15, 255, 0.5)",
    padding: 20,
    borderRadius: 25,
  },
  otpText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
