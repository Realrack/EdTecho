import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Graphic = ({ navigation }) => {
  press = (item) =>{
    if(item.id == 1){
      navigation.navigate('adobe')
    }
    else if (item.id == 2){
      navigation.navigate('canva')
    }
    else if (item.id == 3){
      navigation.navigate('pixlr')
    }
    else if (item.id == 4){
      navigation.navigate('daz3d')
    }
    else{}

  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Icon
          onPress={() => navigation.goBack()}
          color={"rgba(28, 15, 255, 0.5)"}
          size={30}
          name={"arrow-left"}
        />
      </View>
      <View>
        <Text style={styles.text}>Select Topic</Text>
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.flatlist}
          data={[
            {
              id: 1,
              image: require("../Photos/adobe.png"),
              name: "Adobe",
            },
            {
              id: 2,
              image: require("../Photos/canva.jpg"),
              name: "Canva",
            },
            {
              id: 3,
              image: require("../Photos/pixlr.jpg"),
              name: "Pixlr",
            },
            {
              id: 4,
              image: require("../Photos/daz.jpg"),
              name: "Daz 3D",
            },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={styles.renderedContainer}>
                <TouchableOpacity onPress={press.bind(this, item)} style={styles.renderedTouch}>
                  <Image
                    style={{ width: 50, height: 50, marginTop: 5 }}
                    source={item.image}
                  />
                  <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                  <FontAwesome5 name="chevron-right" size={30} />
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default Graphic;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
  centerImage: {
    width: 120,
    height: 100,
    marginTop: -25,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom:2
  },
  renderedContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
  },
  renderedTouch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius:10,
    borderWidth:1.5,
    borderColor:'grey',
    padding:5,
    //paddingRight:5
  },
});
