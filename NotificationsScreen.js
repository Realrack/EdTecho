import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          paddingTop: 10,
          marginBottom: -10,
        }}
        source={require("./Photos/notify.webp")}
      >
        <Icon
          onPress={() => navigation.goBack()}
          color={"rgba(28, 15, 255, 0.5)"}
          size={30}
          name={"arrow-left"}
        ></Icon>


      
        
          <Text
            style={{
              fontSize: 30,
              color: "grey",
              fontWeight: "bold",
              textAlign: "center",
              textAlignVertical: "center",
            }}
          >
            Notifications
          </Text>
          </ImageBackground>
        

        
    </View>
  );
};

export default NotificationsScreen;
