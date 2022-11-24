import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
import { auth } from "./App";

export default class Change extends React.Component {
  constructor() {
    super();
    this.state = { currentpassword: "", newpassword: "" };
  }

  reauthenticate = (currentpassword) => {
    auth;
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentpassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  press = () => {
    auth;
    this.reauthenticate(this.state.currentpassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(this.state.newpassword)
          .then(() => {
            Alert.alert("Password is changed");
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
    var user = firebase.auth().currentUser;
    user
      .updatePassword(this.state.newpassword)
      .then(() => {
        Alert.alert("Password is changed");
      })
      .catch((error) => {
        AbortControllerlert.alert(error.message);
      });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.view}>
          {/* <TextInput style={styles.textinput} placeholder='Email Address'></TextInput> */}
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ currentpassword: text })}
            placeholder="Current Password"
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ newpassword: text })}
            placeholder="New Password"
          />
        </View>

        <TouchableOpacity onPress={this.press} style={styles.touch}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    width: 300,
    height: 60,
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 50,
    paddingLeft: 16,
    fontSize: 20,
    fontWeight: "900",
  },
  view: {
    marginTop: 50,
  },
  touch: {
    width: 300,
    height: 50,
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "blue",
    marginTop: 100,
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
});
