import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OTPInput = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 5 }}>
      <View style={{ marginTop: "5%", marginLeft: 2 }}>
        <Icon
          onPress={() => navigation.navigate("OTP")}
          color={"rgba(28, 15, 255, 0.5)"}
          size={30}
          name={"arrow-left"}
        />
      </View>
      <View style={{ marginTop: "20%", marginLeft: "8%" }}>
        <Text style={{ fontSize: 25, color: "#000", fontWeight: "bold" }}>
          Enter OTP
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <Image
          style={{ width: 80, height: 120 }}
          source={require("./Photos/mobile1.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <Text style={{ color: "#000" }}>Enter 6 digit number send to</Text>
        <Text style={{ color: "#000" }}>Number here</Text>
      </View>
      <View
        style={{
          marginTop: "2%",
          marginLeft: "8%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginRight: "8%",
          marginTop: "5%",
        }}
      >
        <TextInput
          maxLength={1}
          style={{
            width: 40,
            height: 40,
            color: "rgba(28, 15, 255, 0.5)",
            borderWidth: 1,
            borderColor: "rgba(28, 15, 255, 0.5)",
            borderRadius: 5,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
        <TextInput
          maxLength={1}
          style={{
            width: 40,
            height: 40,
            color: "rgba(28, 15, 255, 0.5)",
            borderWidth: 1,
            borderColor: "rgba(28, 15, 255, 0.5)",
            borderRadius: 5,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
        <TextInput
          maxLength={1}
          style={{
            width: 40,
            height: 40,
            color: "rgba(28, 15, 255, 0.5)",
            borderWidth: 1,
            borderColor: "rgba(28, 15, 255, 0.5)",
            borderRadius: 5,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
        <TextInput
          maxLength={1}
          style={{
            width: 40,
            height: 40,
            color: "rgba(28, 15, 255, 0.5)",
            borderWidth: 1,
            borderColor: "rgba(28, 15, 255, 0.5)",
            borderRadius: 5,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
        <TextInput
          maxLength={1}
          style={{
            width: 40,
            height: 40,
            color: "rgba(28, 15, 255, 0.5)",
            borderWidth: 1,
            borderColor: "rgba(28, 15, 255, 0.5)",
            borderRadius: 5,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
        <TextInput
          maxLength={1}
          style={{
            width: 40,
            height: 40,
            color: "rgba(28, 15, 255, 0.5)",
            borderWidth: 1,
            borderColor: "rgba(28, 15, 255, 0.5)",
            borderRadius: 5,
            fontSize: 30,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 50,
            width: 150,
            height: 50,
            backgroundColor: "rgba(28, 15, 255, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: "8%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "rgba(28, 15, 255, 0.5)",
            }}
          >
            Resend OTP
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 150,
            height: 1,
            backgroundColor: "rgba(28, 15, 255, 0.5)",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OTPInput;
