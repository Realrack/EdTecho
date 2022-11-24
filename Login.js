import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { auth } from "./App";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("drawer");
      }
    });
    return unsubscribe;
  }, []);

  const hanleLogin = () => {
    if (email == "" && password == "") {
      alert("Please Enter Email and Password");
    } else if (email == "") {
      alert("Please Enter Email");
    } else if (password == "") {
      alert("Please Enter Password");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in with:", user.email);
          navigation.navigate("drawer");
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Enter your Email-Id & Password</Text>
      </View>
      <View style={styles.inputcheck}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
          style={styles.input}
          label="Email"
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          keyboardType="visible-password"
          onChangeText={(text) => setPassword(text)}
          theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
          style={styles.input}
          label="Password"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("forgot")}
          style={styles.forgot}
        >
          <Text style={{ color: "rgba(28, 15, 255, 0.5)", fontSize: 17 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.touchContainer}>
        <TouchableOpacity onPress={hanleLogin} style={styles.touch}>
          <Text style={styles.otpText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("signup")}
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>New user?</Text>
          <Text style={{ color: "rgba(28, 15, 255, 0.5)", fontSize: 18 }}>
            {" "}
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textContainer: {
    marginTop: "30%",
  },
  text: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 30,
  },
  input: {
    backgroundColor: "#fff",
    margin: 3,
  },
  forgot: {
    marginTop: 20,
    alignItems: "flex-end",
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
  loginContainer: {
    marginTop: "10%",
  },
});
