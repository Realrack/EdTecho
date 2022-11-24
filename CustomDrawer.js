import React from "react";
import { auth } from "./App";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("login");
      })
      .catch((error) => alert(error.message));
  };
  

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "rgba(28, 15, 255, 0.5)" }}
      >
        <View>
          
          <ImageBackground
            source={require("./Photos/back.jpg")}
            style={{ padding: 15, marginTop: -5 }}
          >
            <View style={{flexDirection:'row'}}>
            <View>
            <Image
              source={require("./Photos/Avatar1.png")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
            Ashish Rajput
            </Text>
            </View>
            <View style={{marginHorizontal:100,marginVertical:5}}>
              <FontAwesome5 name="edit" size={22} color={'#fff'}/>
            </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 20 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#f0f5f5" }}>
        <TouchableOpacity onPress={onShare}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons color={"#0096FF"} name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 8,
                fontWeight: "bold",
                color: "#0096FF",
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons color={"red"} name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 8,
                fontWeight: "bold",
                color: "red",
              }}
            >
              SignOut
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
