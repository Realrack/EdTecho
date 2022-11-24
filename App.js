//import 'react-native-gesture-handler';
import React from "react";
import * as firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import Forgot from "./Forgot";
import Signup from "./Signup";
import Change from "./Change";
import Drawer from "./Drawer";
import NotificationsScreen from "./NotificationsScreen";
import WebDevelopment from "./Courses/WebDevelopment";
import AndroidDevelopment from "./Courses/AndroidDevelopment";
import IOSDevelopment from "./Courses/IOSDevelopment";
import ReactDevelopment from "./Courses/ReactDevelopment";
import Graphic from "./Courses/Graphic";
import EthicalHacking from "./Courses/EthicalHacking";
import DataScience from "./Courses/DataScience";
import Html from "./Courses/Topics/Html";
import Css from "./Courses/Topics/Css";
import Bootstrap from "./Courses/Topics/Boootstrap";
import Javascript from "./Courses/Topics/Javascript";
import Android from "./Courses/Topics/Android";
import Node from "./Courses/Topics/Node";
import Kotlin from "./Courses/Topics/Kotlin";
import Python from "./Courses/Topics/Python";
import Java from "./Courses/Topics/Java";
import Apple from "./Courses/Topics/Apple";
import Flutter from "./Courses/Topics/Flutter";
import ReactNative from "./Courses/Topics/ReactNative";
import SQL from "./Courses/Topics/SQL";
import Julia from "./Courses/Topics/Julia";
import Cplus from "./Courses/Topics/Cplus";
import Scala from "./Courses/Topics/Scala";
import Bash from "./Courses/Topics/Bash";
import Perl from "./Courses/Topics/Perl";
import Php from "./Courses/Topics/Php";
import Ruby from "./Courses/Topics/Ruby";
import Adobe from "./Courses/Topics/Adobe";
import Canva from "./Courses/Topics/Canva";
import Pixlr from "./Courses/Topics/Pixlr";
import Daz3d from "./Courses/Topics/Daz3d";
import Letstudy from "./Letstudy";
import Batches from "./Batches";
import Centres from "./Centres";
import Books from "./Books";
import Test from "./Test";
import Notes from "./Notes";

const firebaseConfig = {
  apiKey: "AIzaSyACVJ68l2s_iupggi16xr5d5GmRrrVwcH0",
  authDomain: "calculator-ea886.firebaseapp.com",
  databaseURL: "https://calculator-ea886-default-rtdb.firebaseio.com",
  projectId: "calculator-ea886",
  storageBucket: "calculator-ea886.appspot.com",
  messagingSenderId: "953481902208",
  appId: "1:953481902208:web:883311cfb478cb7aa5ce65",
  measurementId: "G-ZK38ZRTS8R",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };

console.log(auth)

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
          statusBarColor: "rgba(28, 15, 255, 0.5)",
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgot" component={Forgot} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="change" component={Change} />
        <Stack.Screen name="notifications" component={NotificationsScreen} />
        <Stack.Screen name="drawer" component={Drawer} />
        <Stack.Screen name="letstudy" component={Letstudy}/>
        <Stack.Screen name="web" component={WebDevelopment} />
        <Stack.Screen name="androidevelopment" component={AndroidDevelopment} />
        <Stack.Screen name="ios" component={IOSDevelopment} />
        <Stack.Screen name="reactscreen" component={ReactDevelopment} />
        <Stack.Screen name="hack" component={EthicalHacking} />
        <Stack.Screen name="graphic" component={Graphic} />
        <Stack.Screen name="dataScience" component={DataScience} />
        <Stack.Screen name="html" component={Html} />
        <Stack.Screen name="css" component={Css} />
        <Stack.Screen name="bootstrap" component={Bootstrap} />
        <Stack.Screen name="js" component={Javascript} />
        <Stack.Screen name="android" component={Android} />
        <Stack.Screen name="kotlin" component={Kotlin} />
        <Stack.Screen name="node" component={Node} />
        <Stack.Screen name="java" component={Java} />
        <Stack.Screen name="apple" component={Apple} />
        <Stack.Screen name="flutter" component={Flutter} />
        <Stack.Screen name="python" component={Python} />
        <Stack.Screen name="react" component={ReactNative} />
        <Stack.Screen name="sql" component={SQL} />
        <Stack.Screen name="julia" component={Julia} />
        <Stack.Screen name="cplus" component={Cplus} />
        <Stack.Screen name="scala" component={Scala} />
        <Stack.Screen name="bash" component={Bash} />
        <Stack.Screen name="perl" component={Perl} />
        <Stack.Screen name="php" component={Php} />
        <Stack.Screen name="ruby" component={Ruby} />
        <Stack.Screen name="adobe" component={Adobe} />
        <Stack.Screen name="canva" component={Canva} />
        <Stack.Screen name="pixlr" component={Pixlr} />
        <Stack.Screen name="daz3d" component={Daz3d}/>
        <Stack.Screen name="batches" component={Batches}/>
        <Stack.Screen name="centres" component={Centres}/>
        <Stack.Screen name="books" component={Books}/>
        <Stack.Screen name="test" component={Test}/>
        <Stack.Screen name="notes" component={Notes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
