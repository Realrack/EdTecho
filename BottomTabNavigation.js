import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./Main";
import CartScreen from "./CartScreen";
import FavouriteScreen from "./FavouriteScreen";
import Letstudy from "./Letstudy";
const Tab = createBottomTabNavigator();

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "rgba(28, 15, 255, 0.5)" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
        name="main"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-outline" color={color} size={size} />
          ),
        }}
        name="let"
        component={Letstudy}
      />
      <Tab.Screen
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
        name="cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
        name="favourite"
        component={FavouriteScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
