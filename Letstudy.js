import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Letstudy = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Let's Study</Text>
        </View>
        <View style={styles.courseContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('web')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/webdev.jpg")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('androidevelopment')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/anddev.jpg")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ios')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/iosdev.jpg")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('reactscreen')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/reactdev.jpg")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('dataScience')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/datascience.jpg")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('hack')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/ethcking.jpg")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('graphic')} style={styles.touchable}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 }}
              source={require("./Photos/graphic.png")}
              style={styles.coursesbg}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Letstudy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textContainer: {},
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  courseContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  coursesbg: {
    flex: 1,
    width: 360,
    height: 200,
    justifyContent: "flex-end",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
  },
  touchable: {
    width: 360,
    height: 200,
    marginBottom: 20,
  },
});
