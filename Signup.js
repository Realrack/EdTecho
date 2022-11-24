import React, { useState } from "react";
import { auth } from "./App";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
//import {SignupUser} from './Components';

import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const Signup = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

 
  const handleSignup = () => {
    
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
        navigation.navigate('drawer',{screen: 'CustomDrawer',params: { myName : name }})
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: "5%", marginLeft: 2 }}>
        <Icon
          onPress={() => navigation.goBack()}
          color={"rgba(28, 15, 255, 0.5)"}
          size={30}
          name={"arrow-left"}
        />
      </View>
      <View style={styles.inputcheck}>
        <Text style={{ fontSize: 25, color: "#000", fontWeight: "bold" }}>
          Enter Details
        </Text>
        <TextInput
          theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          label="Name"
          keyboardType="ascii-capable"
        />
        <TextInput
        value={email}
          onChangeText={(text) => setEmail(text)}
          theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
          style={styles.input}
          label="Email"
          keyboardType="email-address"
        />
        <TextInput
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
          theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
          style={styles.input}
          label="Create Password"
          keyboardType="visible-password"
        />
        <TextInput
          secureTextEntry={passwordVisible2}
          right={
            <TextInput.Icon
              name={passwordVisible2 ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible2(!passwordVisible2)}
            />
          }
          theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
          style={styles.input}
          keyboardType="visible-password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          label="Confirm Password"
        />
      </View>
      <View style={styles.touchContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.touch}>
          <Text style={styles.otpText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputcheck: {
    marginTop: "30%",
    margin: 20,
    padding: 20,
    borderColor: "#d9d9d9",
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
    color: "#000",
  },
});
