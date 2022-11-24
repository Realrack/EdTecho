import React from 'react';
import { View, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

const Centres = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <View style={{marginTop:10}}>
          <Icon
            onPress={() => navigation.goBack()}
            color={"rgba(28, 15, 255, 0.5)"}
            size={30}
            name={"arrow-left"}
          />
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30}}>Centres</Text>
        </View>
    </View>
  )
}

export default Centres;
