import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";

const OTP = ({ navigation }) => {
  const [selected, setSelection] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [code, setCode] = React.useState();

  press = () => {
    if (number == "") {
      alert("Please enter mobile no.");
    } else if (number.length < 10) {
      alert("Please enter correct mobile no.");
    } else {
      alert("Nice");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"rgba(28, 15, 255, 0.5)"} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Enter your Mobile no.</Text>
      </View>
      <View style={styles.inputcheck}>
        <View>
          <TextInput
            theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
            value={number}
            onChangeText={(text) => setNumber(text)}
            style={styles.input}
            label="Mobile"
            maxLength={10}
            keyboardType="numeric"
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <CheckBox
            value={selected}
            onValueChange={() => setSelection(!selected)}
            color={"rgba(28, 15, 255, 0.5)"}
          />
          <Text style={{ fontSize: 16, color: "gray", marginLeft: 5 }}>
            I have a referral code.
          </Text>
        </View>
        <View>
          {selected ? (
            <TextInput
              keyboardType="numeric"
              value={code}
              onValueChange={(text) => setCode(text)}
              height={selected ? "auto" : "0"}
              theme={{ colors: { primary: "rgba(28, 15, 255, 0.5)" } }}
              style={styles.input}
              maxLength={7}
              label="Paste your Code"
            />
          ) : null}
        </View>
      </View>
      <View style={styles.touchContainer}>
        <TouchableOpacity onPress={press} style={styles.touch}>
          <Text style={styles.otpText}>SEND OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>
            Already have an account?
          </Text>
          <Text style={{ color: "rgba(28, 15, 255, 0.5)", fontSize: 18 }}>
            {" "}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textContainer: {
    marginTop: "20%",
  },
  text: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
  inputcheck: {
    margin: 20,
    padding: 20,
    borderColor: "grey",
    borderWidth: 1.2,
    borderRadius: 30,
    backgroundColor: "#fff",
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
  loginContainer: {
    marginTop: "10%",
  },
});
