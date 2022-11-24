import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import { auth } from "./App";

const Main = ({ navigation }) => {
   console.log(auth.currentUser)
  return (
    <SafeAreaView style={styles.container}>
      {/* Here Is The Header */}

      <View style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.openDrawer()}
          name={"notes"}
          size={30}
          color={"rgba(28, 15, 255, 0.5)"}
        />
        <Image
          style={styles.centerImage}
          source={require("./Photos/ica.png")}
        />

        <Entypo
          name={"notification"}
          onPress={() => navigation.navigate("notifications")}
          size={30}
          color={"rgba(28, 15, 255, 0.5)"}
        />
      </View>

      {/* Parent ScrollView starts here */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* greeting with the user name */}

        <View style={styles.greetings}>
          <Text style={{ fontSize: 20, color: "rgba(28, 15, 255, 0.5)" }}>
            Hi,
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "rgba(28, 15, 255, 0.5)",
            }}
          >
            {" "}
            {auth.currentUser.email}
            {"!"}
          </Text>
        </View>

        {/* Advertisement about the app goes here */}

        <Swiper style={styles.swiper} autoplay>
          <View style={styles.imageContainer}>
            <Image
              source={require("./Photos/ad1.jpg")}
              style={styles.swipedImage}
            />
          </View>
          <View>
            <Image
              source={require("./Photos/ad2.png")}
              style={styles.swipedImage}
            />
          </View>
          <View>
            <Image
              source={require("./Photos/ad3.jpg")}
              style={styles.swipedImage}
            />
          </View>
          <View>
            <Image
              source={require("./Photos/ad4.jpg")}
              style={styles.swipedImage}
            />
          </View>
          <View>
            <Image
              source={require("./Photos/ad5.jpg")}
              style={styles.swipedImage}
            />
          </View>
          <View>
            <Image
              source={require("./Photos/ad7.jpg")}
              style={styles.swipedImage}
            />
          </View>
          <View>
            <Image
              source={require("./Photos/ad8.png")}
              style={styles.swipedImage}
            />
          </View>
        </Swiper>

        {/* horizontal scroll view for navigation to the classes section */}

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate("letstudy")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>All Free Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("web")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>Web-Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("androidevelopment")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>Android Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ios")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>IOS Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("reactscreen")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>React-Native Development</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("dataScience")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>Data Science</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("hack")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>Ethical Hacking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("graphic")}
            style={styles.scrollhorz}
          >
            <Text style={styles.horztext}>Graphic Designing</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* explore the app  */}

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "699" }}>
            Explore ICA to learn effectively!
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.lastContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('batches')} style={styles.lastTouch}>
              <MaterialCommunityIcons name="library" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Batches</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('letstudy')} style={styles.lastTouch}>
              <Ionicons name="play" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Demo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('centres')} style={styles.lastTouch}>
              <FontAwesome name="institution" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Centres</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('books')} style={styles.lastTouch}>
              <FontAwesome name="book" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Books</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('test')} style={styles.lastTouch}>
              <MaterialCommunityIcons name="file-certificate" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Test Series</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('notes')} style={styles.lastTouch}>
              <Foundation name="clipboard-notes" size={30} color={'#fff'} />
              <Text style={styles.lastText}>Notes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    
  },
  centerImage: {
    width: 120,
    height: 100,
    marginTop: -25,
    backgroundColor: "#fff",
  },
  greetings: {
    flexDirection: "row",
  },
  swiper: {
    height: 250,
    marginTop: "5%",
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  swipedImage: {
    height:200,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth:1,
    borderColor:'#f0f5f5'
  },
  imageContainer: {
    justifyContent: "center",
  },
  scrollhorz: {
    padding: 8,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    backgroundColor: "rgba(28, 15, 255, 0.5)",
    borderWidth:1,
    borderColor:'#f0f5f5'
  },
  horztext: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  lastTouch: {
    width: 160,
    borderWidth: 1,
    height: 50,
    borderRadius: 15,
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(28, 15, 255, 0.5)",
    borderColor:'#f0f5f5',
    
  },
  lastText: {
    fontSize: 20,
    color:'#fff',
    fontWeight:'bold'
  },
});
